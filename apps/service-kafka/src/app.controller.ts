import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';
import { ThingSpeakData } from './interfaces/thing-speak-data.interface';
import { firstValueFrom } from 'rxjs';

const topicKafka = process.env.KAFKA_TOPIC;

@Controller()
export class AppController {

    constructor(private appService: AppService) {}

    @EventPattern(topicKafka)
    public async sendDataToAPI(@Payload() data: ThingSpeakData): Promise<void> {
        console.log('Kafka Data: ', data);
        await firstValueFrom(this.appService.sendData(data));
    }        
}
