import { Migration } from '@mikro-orm/migrations';

export class Migration20241201175916 extends Migration {

    override async up(): Promise<void> {
        this.addSql(`create table "dataset" ("id" uuid not null default gen_random_uuid(), "name" text not null, constraint "dataset_pkey" primary key ("id"));`);
        this.addSql(`comment on column "dataset"."id" is 'id of the dataset';`);
        this.addSql(`comment on column "dataset"."name" is 'name of the dataset';`);

        this.addSql(`create table "dataset_item" ("id" uuid not null default gen_random_uuid(), "created_at" bigint not null, "value" numeric not null, "dataset_id" uuid not null, constraint "dataset_item_pkey" primary key ("id"));`);
        this.addSql(`comment on column "dataset_item"."id" is 'id of the dataset item';`);
        this.addSql(`comment on column "dataset_item"."created_at" is 'unix timestamp at which dataset item was created';`);
        this.addSql(`comment on column "dataset_item"."value" is 'value of the dataset item';`);
        this.addSql(`comment on column "dataset_item"."dataset_id" is 'dataset id which the item belongs to';`);
        this.addSql(`create index "idx___dataset_item__dataset_id" on "dataset_item" ("dataset_id");`);

        this.addSql(`alter table "dataset_item" add constraint "dataset_item_dataset_id_foreign" foreign key ("dataset_id") references "dataset" ("id") on update cascade;`);
    }

}
