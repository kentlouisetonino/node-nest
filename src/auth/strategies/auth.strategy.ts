import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from 'aws-sdk';
import { Strategy } from 'passport-jwt';

@Injectable()
export class AuthStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly configService: ConfigService) {}
}
