import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDTO } from './register.dto';
import * as argon2 from "argon2";

@Injectable()
export class RegisterService {
    constructor(private prismaService: PrismaService) {}
    
    async createUser({email, username, password}: RegisterDTO) {
        try {
           let hashedPassword = await argon2.hash(password)

            await this.prismaService.user.create({
                data: {
                    email,
                    username,
                    password: hashedPassword
                }
            })
        } catch (e) {
            throw e
        }
    }
}
