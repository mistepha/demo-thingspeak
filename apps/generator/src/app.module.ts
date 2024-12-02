import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ScheduleModule } from '@nestjs/schedule';

const host = process.env.KAFKA_HOST;
const port = process.env.KAFKA_PORT;
const clientId = process.env.KAFKA_CLIENT_ID;
const groupId = process.env.KAFKA_GROUP_ID;

@Module({
    imports: [
        ScheduleModule.forRoot(),
        ClientsModule.register([
            {
                name: 'KAFKA_CLIENT',
                transport: Transport.KAFKA,
                options: {
                    client: {
                        clientId,
                        brokers: [`${host}:${port}`],
                    },
                    consumer: {
                        groupId,
                    },
                },
            },
        ]),
    ],
    providers: [AppService],
})
export class AppModule {}
