import {
    Entity,
    Index,
    ManyToOne,
    PrimaryKey,
    Property,
} from '@mikro-orm/core';
import { DatasetEntity } from './dataset.entity';

@Entity({
    tableName: 'dataset_item',
})
export class DatasetItemEntity {
    @PrimaryKey({
        type: 'uuid',
        defaultRaw: 'gen_random_uuid()',
        comment: 'id of the dataset item',
    })
    public id!: string;

    @Property({
        name: 'created_at',
        columnType: 'bigint',
        nullable: false,
        comment: 'unix timestamp at which dataset item was created',
    })
    public createdAt!: number;

    @Property({
        name: 'value1',
        columnType: 'numeric',
        nullable: true,
        comment: 'value of field1',
    })
    public value1!: string | null;

    @Property({
        name: 'value2',
        columnType: 'numeric',
        nullable: true,
        comment: 'value of field2',
    })
    public value2!: string | null;

    @Property({
        name: 'value3',
        columnType: 'numeric',
        nullable: true,
        comment: 'value of field3',
    })
    public value3!: string | null;

    @Property({
        name: 'value4',
        columnType: 'numeric',
        nullable: true,
        comment: 'value of field4',
    })
    public value4!: string | null;

    @Property({
        name: 'value5',
        columnType: 'numeric',
        nullable: true,
        comment: 'value of field5',
    })
    public value5!: string | null;

    @Property({
        name: 'value6',
        columnType: 'numeric',
        nullable: true,
        comment: 'value of field6',
    })
    public value6!: string | null;

    @Property({
        name: 'value7',
        columnType: 'numeric',
        nullable: true,
        comment: 'value of field7',
    })
    public value7!: string | null;

    @Property({
        name: 'value8',
        columnType: 'numeric',
        nullable: true,
        comment: 'value of field8',
    })
    public value8!: string | null;

    @ManyToOne(
        () => DatasetEntity,
        {
            nullable: false,
            joinColumn: 'dataset_id',
            comment: 'dataset id which the item belongs to',
        },
    )
    @Index({ name: 'idx___dataset_item__dataset_id' })
    public dataset!: DatasetEntity;
}
