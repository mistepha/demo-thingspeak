import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Cron } from '@nestjs/schedule';
import { ThingSpeakData } from './interfaces/thing-speak-data.interface';
import { faker } from '@faker-js/faker';

const topicKafka = process.env.KAFKA_TOPIC;

@Injectable()
export class AppService {
    public constructor(@Inject('KAFKA_CLIENT') private client: ClientKafka) {}

    @Cron('*/10 * * * * *')
    sendData() {
        const createdAt = new Date()
            .toISOString();
    
        const getValue = (): string => `${faker.number.float({ fractionDigits: 5 })}`;

        const data: ThingSpeakData = {
            channel_id: 1337,
            created_at: createdAt,
            entry_id: faker.number.int(), // not used
            field1: getValue(),
            field2: getValue(),
            field3: getValue(),
            field4: getValue(),
            field5: getValue(),
            field6: getValue(),
            field7: getValue(),
            field8: getValue(),
        };

        console.log(`Generator Data:`, data);

        this.client.emit(topicKafka, JSON.stringify(data));
    }

}
