import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_button_block_theme" AS ENUM('primary', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_button_block_theme" AS ENUM('primary', 'outline');
  CREATE TABLE IF NOT EXISTS "pages_blocks_button_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"override_button" boolean,
  	"button_text" varchar,
  	"theme" "enum_pages_blocks_button_block_theme" DEFAULT 'primary',
  	"link_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_button_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"override_button" boolean,
  	"button_text" varchar,
  	"theme" "enum__pages_v_blocks_button_block_theme" DEFAULT 'primary',
  	"link_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_title_column" DROP CONSTRAINT "pages_blocks_title_column_content_button_id_pages_id_fk";
  
  ALTER TABLE "_pages_v_blocks_title_column" DROP CONSTRAINT "_pages_v_blocks_title_column_content_button_id_pages_id_fk";
  
  DROP INDEX IF EXISTS "pages_blocks_title_column_content_content_button_idx";
  DROP INDEX IF EXISTS "_pages_v_blocks_title_column_content_content_button_idx";
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_button_block" ADD CONSTRAINT "pages_blocks_button_block_link_id_pages_id_fk" FOREIGN KEY ("link_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_button_block" ADD CONSTRAINT "pages_blocks_button_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_button_block" ADD CONSTRAINT "_pages_v_blocks_button_block_link_id_pages_id_fk" FOREIGN KEY ("link_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_button_block" ADD CONSTRAINT "_pages_v_blocks_button_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_button_block_order_idx" ON "pages_blocks_button_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_button_block_parent_id_idx" ON "pages_blocks_button_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_button_block_path_idx" ON "pages_blocks_button_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_button_block_link_idx" ON "pages_blocks_button_block" USING btree ("link_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_button_block_order_idx" ON "_pages_v_blocks_button_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_button_block_parent_id_idx" ON "_pages_v_blocks_button_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_button_block_path_idx" ON "_pages_v_blocks_button_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_button_block_link_idx" ON "_pages_v_blocks_button_block" USING btree ("link_id");
  ALTER TABLE "pages_blocks_title_column" DROP COLUMN IF EXISTS "content_button_id";
  ALTER TABLE "_pages_v_blocks_title_column" DROP COLUMN IF EXISTS "content_button_id";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_button_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_button_block" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_blocks_button_block" CASCADE;
  DROP TABLE "_pages_v_blocks_button_block" CASCADE;
  ALTER TABLE "pages_blocks_title_column" ADD COLUMN "content_button_id" integer;
  ALTER TABLE "_pages_v_blocks_title_column" ADD COLUMN "content_button_id" integer;
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_title_column" ADD CONSTRAINT "pages_blocks_title_column_content_button_id_pages_id_fk" FOREIGN KEY ("content_button_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_title_column" ADD CONSTRAINT "_pages_v_blocks_title_column_content_button_id_pages_id_fk" FOREIGN KEY ("content_button_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_title_column_content_content_button_idx" ON "pages_blocks_title_column" USING btree ("content_button_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_title_column_content_content_button_idx" ON "_pages_v_blocks_title_column" USING btree ("content_button_id");
  DROP TYPE "public"."enum_pages_blocks_button_block_theme";
  DROP TYPE "public"."enum__pages_v_blocks_button_block_theme";`)
}
