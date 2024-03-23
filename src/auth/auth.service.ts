import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { AuthorizeTokenOutput } from './dto/auth.output';

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
}
