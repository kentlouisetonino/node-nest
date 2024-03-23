import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from '../auth.service';
import { UserService } from 'src/user/user.service';
import { AuthorizeTokenOutput } from '../dto/auth.output';

@Injectable()
export class AuthStrategy extends PassportStrategy(Strategy) {
  constructor(
    configService: ConfigService,
    private readonly authService: AuthService,
    private readonly userService: UserService
  ) {
    super({
      // Intercept the request if their is a bearer token in header.
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('AUTH_JWT_SECRET')
    });
  }

  // Validate the token pass by the client in the header.
  async validate(validationPayload: {
    email: string;
  }): Promise<AuthorizeTokenOutput> {
    const user = await this.userService.getUserByEmail(validationPayload.email);

    // Check if user does not exist.
    if (!user) {
      throw new UnauthorizedException('Email does not exist.');
    }

    // If user exist, but does not have an accessToken token.
    if (!user.accessToken) {
      throw new UnauthorizedException('Invalid token. Please login again.');
    }

    return await this.authService.authorizeToken(
      validationPayload.email,
      user.accessToken
    );
  }
}
