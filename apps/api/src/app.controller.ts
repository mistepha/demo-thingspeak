import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { DataDto } from './dto/data.dto';
import { DatasetResponseDto } from './dto/dataset-response.dto';
import { ApiKeyAuthGuard } from './guards/api-key-auth.guard';
import { AppGateway } from './app.gateway';

@Controller('dataset')
export class AppController {

    public constructor(
        private readonly appService: AppService,
        private readonly appGateway: AppGateway,
    ) {}

    @Get()
    @UseGuards(ApiKeyAuthGuard)
    public async getDatasets(): Promise<DatasetResponseDto[]> {
        const datasets = await this.appService.getDatasets();

        return datasets.map(d => DatasetResponseDto.fromEntity(d));
    }

    @Post(':name/item')
    @UseGuards(ApiKeyAuthGuard)
    public async createDatasetItem(
        @Param('name') name,
        @Body() data: DataDto,
    ): Promise<void> {
        console.log('name:', name);
        console.log('data:', data);

        const dataset = await this.appService.createDatasetItem(name, data);

        this.appGateway.emitDataset(DatasetResponseDto.fromEntity(dataset));
    } 
}
