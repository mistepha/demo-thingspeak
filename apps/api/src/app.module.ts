import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { AppGateway } from './app.gateway';

@Module({
    imports: [MikroOrmModule.forRoot()],
    controllers: [AppController],
    providers: [AppService, AppGateway],
})
export class AppModule {}
