import { Migration } from '@mikro-orm/migrations';

export class Migration20241226221652 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table if not exists "banner" ("id" text not null, "title" text not null default \'\', "link" text not null, "image" text not null, "image_mobile" text null, "sort_order" integer not null default 0, "enabled" boolean not null default true, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "banner_pkey" primary key ("id"));');
    this.addSql('CREATE UNIQUE INDEX IF NOT EXISTS "IDX_banner_title_unique" ON "banner" (title) WHERE deleted_at IS NULL;');
    this.addSql('CREATE INDEX IF NOT EXISTS "IDX_banner_deleted_at" ON "banner" (deleted_at) WHERE deleted_at IS NULL;');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "banner" cascade;');
  }

}
