// import { ExecutionContext, Injectable } from '@nestjs/common';
// import { Reflector } from '@nestjs/core';
// import { AuthGuard } from '@nestjs/passport';
// import { IS_PUBLIC_KEY } from "../decorators";
//
// @Injectable()
// export class JwtAccessTokenGuard extends AuthGuard('jwt-access-token') {
//   constructor(private readonly reflector: Reflector) {
//     super();
//   }
//
//   canActivate(context: ExecutionContext) {
//     const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
//       context.getHandler(),
//       context.getClass(),
//     ]);
//
//     if (isPublic) {
//       return true;
//     }
//
//     return super.canActivate(context);
//   }
// }
