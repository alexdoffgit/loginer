import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('protected')
export class ProtectedController {
    @Get()
    @UseGuards(JwtAuthGuard)
    message(@Req() req: any) {
        return req.user
    }
}
