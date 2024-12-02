import { Logger } from '@nestjs/common';
import {
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { DatasetResponseDto } from './dto/dataset-response.dto';

const topicWS = 'dataset';

@WebSocketGateway({ cors: { origin: '*' } })
export class AppGateway {

    @WebSocketServer()
    private server: Server;

    private readonly logger = new Logger(AppGateway.name);

    /**
     * subscribe to dataset socket
     */
    @SubscribeMessage(topicWS)
    public async connect(): Promise<void> {
        this.logger.debug(`connected to dataset socket`);
    }

    /**
     * emit a chat message to another user
     */
    public emitDataset(dataset: DatasetResponseDto): void {
        this.logger.debug(`Emit Dataset: ${dataset.id}`);
        this.server.emit(topicWS, dataset);
    }

}
