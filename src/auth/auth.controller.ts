import { Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginOutput } from './dto/auth.output';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('Login')
  loginUser(@Req() req: Request): Promise<LoginOutput> {
    return this.authService.loginUser(req.body);
  }
}
