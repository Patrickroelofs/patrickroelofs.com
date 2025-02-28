import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_rich_text" CASCADE;
  DROP TABLE "pages_blocks_big_list_block_items" CASCADE;
  DROP TABLE "pages_blocks_big_list_block" CASCADE;
  DROP TABLE "pages_blocks_title_with_blocks" CASCADE;
  DROP TABLE "_pages_v_blocks_rich_text" CASCADE;
  DROP TABLE "_pages_v_blocks_big_list_block_items" CASCADE;
  DROP TABLE "_pages_v_blocks_big_list_block" CASCADE;
  DROP TABLE "_pages_v_blocks_title_with_blocks" CASCADE;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "pages_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_big_list_block_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"link_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_big_list_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_title_with_blocks" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_big_list_block_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"link_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_big_list_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_title_with_blocks" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_rich_text" ADD CONSTRAINT "pages_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_big_list_block_items" ADD CONSTRAINT "pages_blocks_big_list_block_items_link_id_pages_id_fk" FOREIGN KEY ("link_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_big_list_block_items" ADD CONSTRAINT "pages_blocks_big_list_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_big_list_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_big_list_block" ADD CONSTRAINT "pages_blocks_big_list_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_title_with_blocks" ADD CONSTRAINT "pages_blocks_title_with_blocks_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_rich_text" ADD CONSTRAINT "_pages_v_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_big_list_block_items" ADD CONSTRAINT "_pages_v_blocks_big_list_block_items_link_id_pages_id_fk" FOREIGN KEY ("link_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_big_list_block_items" ADD CONSTRAINT "_pages_v_blocks_big_list_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_big_list_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_big_list_block" ADD CONSTRAINT "_pages_v_blocks_big_list_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_title_with_blocks" ADD CONSTRAINT "_pages_v_blocks_title_with_blocks_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_rich_text_order_idx" ON "pages_blocks_rich_text" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_rich_text_parent_id_idx" ON "pages_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_rich_text_path_idx" ON "pages_blocks_rich_text" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_big_list_block_items_order_idx" ON "pages_blocks_big_list_block_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_big_list_block_items_parent_id_idx" ON "pages_blocks_big_list_block_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_big_list_block_items_link_idx" ON "pages_blocks_big_list_block_items" USING btree ("link_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_big_list_block_order_idx" ON "pages_blocks_big_list_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_big_list_block_parent_id_idx" ON "pages_blocks_big_list_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_big_list_block_path_idx" ON "pages_blocks_big_list_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_title_with_blocks_order_idx" ON "pages_blocks_title_with_blocks" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_title_with_blocks_parent_id_idx" ON "pages_blocks_title_with_blocks" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_title_with_blocks_path_idx" ON "pages_blocks_title_with_blocks" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_rich_text_order_idx" ON "_pages_v_blocks_rich_text" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_rich_text_parent_id_idx" ON "_pages_v_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_rich_text_path_idx" ON "_pages_v_blocks_rich_text" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_big_list_block_items_order_idx" ON "_pages_v_blocks_big_list_block_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_big_list_block_items_parent_id_idx" ON "_pages_v_blocks_big_list_block_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_big_list_block_items_link_idx" ON "_pages_v_blocks_big_list_block_items" USING btree ("link_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_big_list_block_order_idx" ON "_pages_v_blocks_big_list_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_big_list_block_parent_id_idx" ON "_pages_v_blocks_big_list_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_big_list_block_path_idx" ON "_pages_v_blocks_big_list_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_title_with_blocks_order_idx" ON "_pages_v_blocks_title_with_blocks" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_title_with_blocks_parent_id_idx" ON "_pages_v_blocks_title_with_blocks" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_title_with_blocks_path_idx" ON "_pages_v_blocks_title_with_blocks" USING btree ("_path");`)
}
