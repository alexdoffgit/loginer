import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDTO } from './login.dto';
import * as argon2 from "argon2";
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class LoginService {
    constructor(
        private prismaService: PrismaService,
        private authService: AuthService
    ) {}

    async findUser({email, password}: LoginDTO) {
        try {
            let user = await this.prismaService.user.findFirstOrThrow({
                where: {
                    email
                }
            })

            let passwordValid = await argon2.verify(user.password, password)

            if(!passwordValid) {
                throw new Error("unauthorized");
            }

            return this.authService.signedToken({
                username: user.username,
                id: user.id
            })
        } catch (e) {
            throw e
        }
    }
}
