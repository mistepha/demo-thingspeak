import { EntityManager, MikroORM } from '@mikro-orm/core';
import { Injectable, OnApplicationShutdown } from '@nestjs/common';
import { DataDto } from './dto/data.dto';
import { DatasetItemEntity } from './db/entities/dataset-item.entity';
import { DatasetEntity } from './db/entities/dataset.entity';

@Injectable()
export class AppService implements OnApplicationShutdown {

    public constructor(
        private orm: MikroORM,
        private em: EntityManager,
    ) {}

    /**
     * get all datasets
     */
    public async getDatasets() {
        return this.em.find(
            DatasetEntity,
            {},
            {
                populate: ['items'],
                orderBy: [
                    { name: 'ASC' },
                    { items: { createdAt: 'DESC' }},
                ],
            }
        );
    }

    /**
     * create dataset item
     * if dataset does not exist creates dataset
     */
    public async createDatasetItem(
        name: string,
        data: DataDto
    ): Promise<DatasetEntity> {
        const dataset = (await this.em.findOne(DatasetEntity, { name }))
            ?? new DatasetEntity();

        dataset.name = name;

        const createdAt = new Date(data.createdAt);
        const item = new DatasetItemEntity();

        item.createdAt = Math.floor(createdAt.getTime() / 1000);
        item.value1 = data.value1;
        item.value2 = data.value2;
        item.value3 = data.value3;
        item.value4 = data.value4;
        item.value5 = data.value5;
        item.value6 = data.value6;
        item.value7 = data.value7;
        item.value8 = data.value8;
        
        dataset.items.add(item);

        this.em.persistAndFlush(dataset);

        return this.em.findOne(
            DatasetEntity,
            { id: dataset.id },
            {
                populate: ['items'],
                orderBy: [{ items: { createdAt: 'DESC' }}],
            },
        );
    }

    // cleanup on application shutdown
    public async onApplicationShutdown(): Promise<void> {
        await this.orm.close();
    }
}
