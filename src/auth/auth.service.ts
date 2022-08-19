import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {}

    /*
    * user: {username: string, id: string}
    */
    signedToken(user: any) {
      const payload = { username: user.username, sub: user.id };
      return this.jwtService.sign(payload)
    }
}
