import { Body, Controller, Post } from '@nestjs/common';
import { RegisterDTO } from './register.dto';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {
    constructor(private registerService: RegisterService) {}

    @Post()
    async register(@Body() payload: RegisterDTO) {
        try {
            await this.registerService.createUser(payload)
            return "success"
        } catch (error) {
            console.log(error)
            return "server error"
        }
    }
}
