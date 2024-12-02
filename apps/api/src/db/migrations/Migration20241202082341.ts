import { Migration } from '@mikro-orm/migrations';

export class Migration20241202082341 extends Migration {

    override async up(): Promise<void> {
        this.addSql(`alter table "dataset_item" drop column "value";`);

        this.addSql(`alter table "dataset_item" add column "value1" numeric null, add column "value2" numeric null, add column "value3" numeric null, add column "value4" numeric null, add column "value5" numeric null, add column "value6" numeric null, add column "value7" numeric null, add column "value8" numeric null;`);
        this.addSql(`comment on column "dataset_item"."value1" is 'value of field1';`);
        this.addSql(`comment on column "dataset_item"."value2" is 'value of field2';`);
        this.addSql(`comment on column "dataset_item"."value3" is 'value of field3';`);
        this.addSql(`comment on column "dataset_item"."value4" is 'value of field4';`);
        this.addSql(`comment on column "dataset_item"."value5" is 'value of field5';`);
        this.addSql(`comment on column "dataset_item"."value6" is 'value of field6';`);
        this.addSql(`comment on column "dataset_item"."value7" is 'value of field7';`);
        this.addSql(`comment on column "dataset_item"."value8" is 'value of field8';`);
    }

    override async down(): Promise<void> {
        this.addSql(`alter table "dataset_item" drop column "value1", drop column "value2", drop column "value3", drop column "value4", drop column "value5", drop column "value6", drop column "value7", drop column "value8";`);

        this.addSql(`alter table "dataset_item" add column "value" numeric not null;`);
        this.addSql(`comment on column "dataset_item"."value" is 'value of the dataset item';`);
    }

}
