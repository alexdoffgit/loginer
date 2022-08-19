import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { secret, expiresIn } from '../../constants';

@Module({
  imports: [
    PrismaModule, 
    AuthModule,
    JwtModule.register({
      secret,
      signOptions: {expiresIn}
    })
  ],
  providers: [LoginService, PrismaService, AuthService],
  controllers: [LoginController]
})
export class LoginModule {}
