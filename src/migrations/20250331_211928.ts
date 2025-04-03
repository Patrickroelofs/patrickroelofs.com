import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_pages_blocks_grid_settings_columns" RENAME TO "enum_pages_blocks_grid_columns";
  ALTER TYPE "public"."enum__pages_v_blocks_grid_settings_columns" RENAME TO "enum__pages_v_blocks_grid_columns";
  CREATE TABLE IF NOT EXISTS "pages_blocks_sticky_title" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_sticky_title" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_grid" RENAME COLUMN "settings_columns" TO "columns";
  ALTER TABLE "_pages_v_blocks_grid" RENAME COLUMN "settings_columns" TO "columns";
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_sticky_title" ADD CONSTRAINT "pages_blocks_sticky_title_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_sticky_title" ADD CONSTRAINT "_pages_v_blocks_sticky_title_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_sticky_title_order_idx" ON "pages_blocks_sticky_title" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_sticky_title_parent_id_idx" ON "pages_blocks_sticky_title" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_sticky_title_path_idx" ON "pages_blocks_sticky_title" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_sticky_title_order_idx" ON "_pages_v_blocks_sticky_title" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_sticky_title_parent_id_idx" ON "_pages_v_blocks_sticky_title" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_sticky_title_path_idx" ON "_pages_v_blocks_sticky_title" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_pages_blocks_grid_columns" RENAME TO "enum_pages_blocks_grid_settings_columns";
  ALTER TYPE "public"."enum__pages_v_blocks_grid_columns" RENAME TO "enum__pages_v_blocks_grid_settings_columns";
  DROP TABLE "pages_blocks_sticky_title" CASCADE;
  DROP TABLE "_pages_v_blocks_sticky_title" CASCADE;
  ALTER TABLE "pages_blocks_grid" RENAME COLUMN "columns" TO "settings_columns";
  ALTER TABLE "_pages_v_blocks_grid" RENAME COLUMN "columns" TO "settings_columns";`)
}
