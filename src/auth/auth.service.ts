import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { AuthorizeTokenOutput, LoginOutput } from './dto/auth.output';
import { LoginInput } from './dto/auth.input';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
  ) {}

  async authorizeToken(
    email: string,
    accessToken: string
  ): Promise<AuthorizeTokenOutput> {
    const user = await this.userService.getUserByEmail(email);

    return {
      accessToken: accessToken,
      currentUser: user
    };
  }

  async loginUser(payload: LoginInput): Promise<LoginOutput> {
    const user = await this.userService.getUserByEmail(payload.email);
    const decodedPassword = this.jwtService.decode(user.password);

    // Check if the user password is correct.
    if (payload.password !== decodedPassword) {
      throw new UnauthorizedException('Password is incorrect.');
    }

    const tokenPayload = {
      id: user.id,
      email: payload.email
    };

    // Create an accessToken.
    const signedToken = this.jwtService.sign(tokenPayload, {
      secret: `${this.configService.get('AUTH_JWT_SECRET')}`,
      expiresIn: '25200s'
    });

    // Makes sure the user exist, then store the accessToken.
    if (user) {
      await this.userService.updateUser({
        id: user.id,
        accessToken: signedToken
      });
    }

    return {
      accessToken: signedToken
    };
  }
}
