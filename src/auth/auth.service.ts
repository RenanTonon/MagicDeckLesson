import { Injectable, UnauthorizedException } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/services/user.services';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService
  ) {}

  async signIn(
    username: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findUserByName(username,pass);

    const payload = { sub: user._id, username: user.username, roles: user.role };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}