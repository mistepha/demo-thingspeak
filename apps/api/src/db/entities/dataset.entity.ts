import {
    Collection,
    Entity,
    OneToMany,
    PrimaryKey,
    Property,
} from '@mikro-orm/core';
import { DatasetItemEntity } from './dataset-item.entity';

@Entity({
    tableName: 'dataset',
})
export class DatasetEntity {

    @PrimaryKey({
        type: 'uuid',
        defaultRaw: 'gen_random_uuid()',
        comment: 'id of the dataset',
    })
    public id!: string;

    @Property({
        name: 'name',
        columnType: 'text',
        nullable: false,
        comment: 'name of the dataset',
    })
    public name!: string;

    @OneToMany(() => DatasetItemEntity, item => item.dataset)
    public items = new Collection<DatasetItemEntity>(this);

}
