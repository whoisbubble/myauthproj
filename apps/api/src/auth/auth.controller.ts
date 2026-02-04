import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    @Post('login')
    login(@Body() body: { email: string, password: string}) {
        return {
            succes: true,
            message: 'Oh Yeah! Nest Log In',
            received: body,
        };
    }
}
