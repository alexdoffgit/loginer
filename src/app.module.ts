import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { ProtectedModule } from './protected/protected.module';

@Module({
  imports: [
    RegisterModule, 
    LoginModule, 
    ProtectedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
