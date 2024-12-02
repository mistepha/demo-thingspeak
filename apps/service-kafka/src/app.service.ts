import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ThingSpeakData } from './interfaces/thing-speak-data.interface';
import { DataDto } from './dto/data.dto';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

const apiUrl = process.env.API_URL;
const apiKey = process.env.API_KEY;

@Injectable()
export class AppService {

    public constructor(private httpService: HttpService) {}

    /**
     * send data to API
     */
    public sendData(data: ThingSpeakData): Observable<AxiosResponse<void>> {
        const dto = new DataDto();

        dto.value1 = data.field1;
        dto.value2 = data.field2;
        dto.value3 = data.field3;
        dto.value4 = data.field4;
        dto.value5 = data.field5;
        dto.value6 = data.field6;
        dto.value7 = data.field7;
        dto.value8 = data.field8;
        dto.createdAt = data.created_at;

        const headers = { Authorization: apiKey };
    
        return this.httpService
            .post(`${apiUrl}/dataset/${data.channel_id}/item`, dto, { headers });
    }

}
