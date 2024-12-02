import { Controller, Inject } from '@nestjs/common';
import { ClientKafka, EventPattern, Payload } from '@nestjs/microservices';

const topicMQTT = process.env.MQTT_TOPIC;
const topicKafka = process.env.KAFKA_TOPIC;

@Controller()
export class AppController {

    public constructor(@Inject('KAFKA_CLIENT') private client: ClientKafka) {}

    @EventPattern(topicMQTT)
    public getData(@Payload() data: unknown) {
        console.log(`MQTT Data:`, data);

        this.client.emit(topicKafka, JSON.stringify(data));
    }        
}
