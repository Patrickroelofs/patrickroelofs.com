import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_grid_settings_columns" AS ENUM('3');
  CREATE TYPE "public"."enum__pages_v_blocks_grid_settings_columns" AS ENUM('3');
  CREATE TABLE IF NOT EXISTS "pages_blocks_simple_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"settings_columns" "enum_pages_blocks_grid_settings_columns" DEFAULT '3',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_simple_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"settings_columns" "enum__pages_v_blocks_grid_settings_columns" DEFAULT '3',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_simple_text" ADD CONSTRAINT "pages_blocks_simple_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_grid" ADD CONSTRAINT "pages_blocks_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_simple_text" ADD CONSTRAINT "_pages_v_blocks_simple_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_grid" ADD CONSTRAINT "_pages_v_blocks_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_simple_text_order_idx" ON "pages_blocks_simple_text" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_simple_text_parent_id_idx" ON "pages_blocks_simple_text" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_simple_text_path_idx" ON "pages_blocks_simple_text" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_grid_order_idx" ON "pages_blocks_grid" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_grid_parent_id_idx" ON "pages_blocks_grid" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_grid_path_idx" ON "pages_blocks_grid" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_simple_text_order_idx" ON "_pages_v_blocks_simple_text" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_simple_text_parent_id_idx" ON "_pages_v_blocks_simple_text" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_simple_text_path_idx" ON "_pages_v_blocks_simple_text" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_grid_order_idx" ON "_pages_v_blocks_grid" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_grid_parent_id_idx" ON "_pages_v_blocks_grid" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_grid_path_idx" ON "_pages_v_blocks_grid" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_simple_text" CASCADE;
  DROP TABLE "pages_blocks_grid" CASCADE;
  DROP TABLE "_pages_v_blocks_simple_text" CASCADE;
  DROP TABLE "_pages_v_blocks_grid" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_grid_settings_columns";
  DROP TYPE "public"."enum__pages_v_blocks_grid_settings_columns";`)
}
