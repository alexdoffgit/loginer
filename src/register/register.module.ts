import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';

@Module({
  imports: [PrismaModule],
  controllers: [RegisterController],
  providers: [RegisterService, PrismaService]
})
export class RegisterModule {}
