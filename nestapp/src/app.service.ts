import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hola Mundo';
  }

  getHelloJson(): { hello: string } {
    return {
      hello: 'Hola Mundo',
    }
  }
}
