import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ProtectedController } from './protected.controller';
import { secret, expiresIn } from "../../constants";
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Module({
  imports: [JwtModule.register({
    secret,
    signOptions: {expiresIn}
  })],
  providers: [JwtAuthGuard],
  controllers: [ProtectedController]
})
export class ProtectedModule {}
