import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
    const host = process.env.MQTT_HOST;
    const port = process.env.MQTT_PORT;
    const clientId = process.env.MQTT_CLIENT_ID;
    const username = process.env.MQTT_USERNAME;
    const password = process.env.MQTT_PASSWORD;

    const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
        transport: Transport.MQTT,
        options: {
            url: `mqtt://${host}:${port}`,
            clientId,
            username,
            password,
            subscribeOptions: {
                qos: 0,
            },
        },
    });

    await app.listen();
}
bootstrap()
    .catch(e => {
        throw e;
    });
