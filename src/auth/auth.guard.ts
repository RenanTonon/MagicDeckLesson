import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuardRoute implements CanActivate {
  async canActivate(context: ExecutionContext,):Promise<boolean> {
    const request = context.switchToHttp().getRequest()
    const token = this.extractTokenFromHeader(request)
    return await false;
  }

  private extractTokenFromHeader(request: Request):string | undefined{
    const [type,token] = request.headers.authorization?.split(' ') ?? [];
    return type == 'Bearer' ? token: undefined
  }
}