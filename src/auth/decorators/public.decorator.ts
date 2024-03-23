import { ExecutionContext, SetMetadata } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

export const PUBLIC_KEY = 'public';

// Use this decorator in a controller method to allow bypass authorization.
export const Public = () => {
  return SetMetadata(PUBLIC_KEY, true);
};

// Takes care the process of bypassing the authorization.
export const byPassAuth = (
  context: ExecutionContext,
  reflector: Reflector
): boolean => {
  return reflector.get<boolean>(PUBLIC_KEY, context.getHandler());
};
