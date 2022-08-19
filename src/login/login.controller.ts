import { Body, Controller, Post } from '@nestjs/common';
import { LoginDTO } from './login.dto';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
    constructor(private loginService: LoginService) {}

    @Post()
    async login(@Body() payload: LoginDTO) {
        try {
            let token = await this.loginService.findUser(payload)
            return {
                token
            }
        } catch (e) {
            console.log(e)
            return "failed"
        }
    }
}
