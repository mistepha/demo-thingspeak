import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

const host = process.env.KAFKA_HOST;
const port = process.env.KAFKA_PORT;
const clientId = process.env.KAFKA_CLIENT_ID;
const groupId = process.env.KAFKA_GROUP_ID;

@Module({
    imports: [
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
    controllers: [AppController],
})
export class AppModule {}
