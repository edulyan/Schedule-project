import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './roles-auth.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private jwtService: JwtService, private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const roles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
        context.getHandler(),
        context.getClass(),
      ]);
      if (!roles) {
        return true;
      }
      const req = context.switchToHttp().getRequest();

      console.log('Decorator - ' + roles);
      console.log('Some - ', req.user.role.name);

      // if (bearer !== 'Bearer' || !token) {
      //   throw new UnauthorizedException({
      //     message: 'Пользователь не авторизован',
      //   });
      // }

      // const user = this.jwtService.verify(token);
      // req.user = user;
      // console.log('Token - ' + user.role.name);

      // return user.role.some((role: any) => requiredRoles.includes(role.value));

      return roles.some((role) => req.user.role.name.includes(role));
    } catch (e) {
      console.log(e);
      throw new HttpException('Нет доступа', HttpStatus.FORBIDDEN);
    }
  }
}
