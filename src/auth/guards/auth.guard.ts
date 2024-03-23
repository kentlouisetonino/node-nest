import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard as AuthGuardPassport } from '@nestjs/passport';
import { byPassAuth } from '../decorators/public.decorator';

@Injectable()
export class AuthGuard extends AuthGuardPassport('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  // This method will take care if need to enforce the auth or bypass.
  async canActivate(context: ExecutionContext) {
    const isPublicRoute = byPassAuth(context, this.reflector);

    if (isPublicRoute) {
      return true;
    }

    // Check if request pass the authentication.
    const allowRequest = await super.canActivate(context);

    return allowRequest as boolean;
  }
}
