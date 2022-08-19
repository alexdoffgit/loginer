import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { secret, expiresIn } from "../../constants";
import { JwtAuthGuard } from './jwt-auth.guard';
import { AuthService } from './auth.service';

@Module({
    imports: [JwtModule.register({
        secret,
        signOptions: {expiresIn}
    })],
    providers: [JwtStrategy, AuthService, JwtAuthGuard, JwtService],
    exports: [JwtAuthGuard, AuthService]
})
export class AuthModule {}
