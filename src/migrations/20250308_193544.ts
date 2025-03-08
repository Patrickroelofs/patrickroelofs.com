import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_blog_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__blog_v_version_status" AS ENUM('draft', 'published');
  CREATE TABLE IF NOT EXISTS "pages_blocks_blog_list_content_articles" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"article_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_blog_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_blog_list_content_articles" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"article_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_blog_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blog_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blog" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"slug" varchar,
  	"description" varchar,
  	"cover_image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_blog_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_v_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_description" varchar,
  	"version_cover_image_id" integer,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__blog_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  ALTER TABLE "media" ADD COLUMN "sizes_xsmall_url" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_xsmall_width" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_xsmall_height" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_xsmall_mime_type" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_xsmall_filesize" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_xsmall_filename" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_small_url" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_small_width" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_small_height" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_small_mime_type" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_small_filesize" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_small_filename" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_medium_url" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_medium_width" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_medium_height" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_medium_mime_type" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_medium_filesize" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_medium_filename" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_large_url" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_large_width" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_large_height" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_large_mime_type" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_large_filesize" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_large_filename" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_xlarge_url" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_xlarge_width" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_xlarge_height" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_xlarge_mime_type" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_xlarge_filesize" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_xlarge_filename" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_xxlarge_url" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_xxlarge_width" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_xxlarge_height" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_xxlarge_mime_type" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_xxlarge_filesize" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_xxlarge_filename" varchar;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "blog_id" integer;
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_blog_list_content_articles" ADD CONSTRAINT "pages_blocks_blog_list_content_articles_article_id_blog_id_fk" FOREIGN KEY ("article_id") REFERENCES "public"."blog"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_blog_list_content_articles" ADD CONSTRAINT "pages_blocks_blog_list_content_articles_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_blog_list"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_blog_list" ADD CONSTRAINT "pages_blocks_blog_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_blog_list_content_articles" ADD CONSTRAINT "_pages_v_blocks_blog_list_content_articles_article_id_blog_id_fk" FOREIGN KEY ("article_id") REFERENCES "public"."blog"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_blog_list_content_articles" ADD CONSTRAINT "_pages_v_blocks_blog_list_content_articles_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_blog_list"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_blog_list" ADD CONSTRAINT "_pages_v_blocks_blog_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_blocks_rich_text" ADD CONSTRAINT "blog_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog" ADD CONSTRAINT "blog_cover_image_id_media_id_fk" FOREIGN KEY ("cover_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_v_blocks_rich_text" ADD CONSTRAINT "_blog_v_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_v" ADD CONSTRAINT "_blog_v_parent_id_blog_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."blog"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_v" ADD CONSTRAINT "_blog_v_version_cover_image_id_media_id_fk" FOREIGN KEY ("version_cover_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_blog_list_content_articles_order_idx" ON "pages_blocks_blog_list_content_articles" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_blog_list_content_articles_parent_id_idx" ON "pages_blocks_blog_list_content_articles" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_blog_list_content_articles_article_idx" ON "pages_blocks_blog_list_content_articles" USING btree ("article_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_blog_list_order_idx" ON "pages_blocks_blog_list" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_blog_list_parent_id_idx" ON "pages_blocks_blog_list" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_blog_list_path_idx" ON "pages_blocks_blog_list" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_blog_list_content_articles_order_idx" ON "_pages_v_blocks_blog_list_content_articles" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_blog_list_content_articles_parent_id_idx" ON "_pages_v_blocks_blog_list_content_articles" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_blog_list_content_articles_article_idx" ON "_pages_v_blocks_blog_list_content_articles" USING btree ("article_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_blog_list_order_idx" ON "_pages_v_blocks_blog_list" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_blog_list_parent_id_idx" ON "_pages_v_blocks_blog_list" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_blog_list_path_idx" ON "_pages_v_blocks_blog_list" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "blog_blocks_rich_text_order_idx" ON "blog_blocks_rich_text" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blog_blocks_rich_text_parent_id_idx" ON "blog_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blog_blocks_rich_text_path_idx" ON "blog_blocks_rich_text" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "blog_slug_idx" ON "blog" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "blog_cover_image_idx" ON "blog" USING btree ("cover_image_id");
  CREATE INDEX IF NOT EXISTS "blog_updated_at_idx" ON "blog" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "blog_created_at_idx" ON "blog" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "blog__status_idx" ON "blog" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "_blog_v_blocks_rich_text_order_idx" ON "_blog_v_blocks_rich_text" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blog_v_blocks_rich_text_parent_id_idx" ON "_blog_v_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_v_blocks_rich_text_path_idx" ON "_blog_v_blocks_rich_text" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_blog_v_parent_idx" ON "_blog_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_v_version_version_slug_idx" ON "_blog_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_blog_v_version_version_cover_image_idx" ON "_blog_v" USING btree ("version_cover_image_id");
  CREATE INDEX IF NOT EXISTS "_blog_v_version_version_updated_at_idx" ON "_blog_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_blog_v_version_version_created_at_idx" ON "_blog_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_blog_v_version_version__status_idx" ON "_blog_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_blog_v_created_at_idx" ON "_blog_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_blog_v_updated_at_idx" ON "_blog_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_blog_v_latest_idx" ON "_blog_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_blog_v_autosave_idx" ON "_blog_v" USING btree ("autosave");
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_blog_fk" FOREIGN KEY ("blog_id") REFERENCES "public"."blog"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "media_sizes_xsmall_sizes_xsmall_filename_idx" ON "media" USING btree ("sizes_xsmall_filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_small_sizes_small_filename_idx" ON "media" USING btree ("sizes_small_filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_medium_sizes_medium_filename_idx" ON "media" USING btree ("sizes_medium_filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_large_sizes_large_filename_idx" ON "media" USING btree ("sizes_large_filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_xlarge_sizes_xlarge_filename_idx" ON "media" USING btree ("sizes_xlarge_filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_xxlarge_sizes_xxlarge_filename_idx" ON "media" USING btree ("sizes_xxlarge_filename");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_blog_id_idx" ON "payload_locked_documents_rels" USING btree ("blog_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_blog_list_content_articles" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_blog_list" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_blog_list_content_articles" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_blog_list" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "blog_blocks_rich_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "blog" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_blog_v_blocks_rich_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_blog_v" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_blocks_blog_list_content_articles" CASCADE;
  DROP TABLE "pages_blocks_blog_list" CASCADE;
  DROP TABLE "_pages_v_blocks_blog_list_content_articles" CASCADE;
  DROP TABLE "_pages_v_blocks_blog_list" CASCADE;
  DROP TABLE "blog_blocks_rich_text" CASCADE;
  DROP TABLE "blog" CASCADE;
  DROP TABLE "_blog_v_blocks_rich_text" CASCADE;
  DROP TABLE "_blog_v" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_blog_fk";
  
  DROP INDEX IF EXISTS "media_sizes_xsmall_sizes_xsmall_filename_idx";
  DROP INDEX IF EXISTS "media_sizes_small_sizes_small_filename_idx";
  DROP INDEX IF EXISTS "media_sizes_medium_sizes_medium_filename_idx";
  DROP INDEX IF EXISTS "media_sizes_large_sizes_large_filename_idx";
  DROP INDEX IF EXISTS "media_sizes_xlarge_sizes_xlarge_filename_idx";
  DROP INDEX IF EXISTS "media_sizes_xxlarge_sizes_xxlarge_filename_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_blog_id_idx";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_xsmall_url";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_xsmall_width";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_xsmall_height";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_xsmall_mime_type";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_xsmall_filesize";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_xsmall_filename";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_small_url";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_small_width";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_small_height";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_small_mime_type";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_small_filesize";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_small_filename";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_medium_url";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_medium_width";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_medium_height";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_medium_mime_type";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_medium_filesize";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_medium_filename";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_large_url";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_large_width";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_large_height";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_large_mime_type";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_large_filesize";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_large_filename";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_xlarge_url";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_xlarge_width";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_xlarge_height";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_xlarge_mime_type";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_xlarge_filesize";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_xlarge_filename";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_xxlarge_url";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_xxlarge_width";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_xxlarge_height";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_xxlarge_mime_type";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_xxlarge_filesize";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_xxlarge_filename";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "blog_id";
  DROP TYPE "public"."enum_blog_status";
  DROP TYPE "public"."enum__blog_v_version_status";`)
}
