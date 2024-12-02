import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
    const host = process.env.KAFKA_HOST;
    const port = process.env.KAFKA_PORT;
    const broker = `${host}:${port}`;
    const clientId = process.env.KAFKA_CLIENT_ID;
    const groupId = process.env.KAFKA_GROUP_ID;

    const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
        transport: Transport.KAFKA,
        options: {
            client: {
                clientId,
                brokers: [broker],
            },
            consumer: {
                groupId,
            },
        },
    });

    await app.listen();
}
bootstrap()
    .catch(e => {
        throw e;
    });
