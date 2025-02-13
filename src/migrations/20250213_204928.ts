import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "media_locales" (
  	"alt" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_locales" (
  	"version_title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "blog_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_v_locales" (
  	"version_title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  ALTER TABLE "navigation_rels" DROP CONSTRAINT "navigation_rels_blog_fk";
  
  DROP INDEX IF EXISTS "navigation_rels_blog_id_idx";
  DROP INDEX IF EXISTS "navigation_rels_pages_id_idx";
  ALTER TABLE "navigation_navigation_links" ADD COLUMN "_locale" "_locales" NOT NULL;
  ALTER TABLE "navigation_rels" ADD COLUMN "locale" "_locales";
  DO $$ BEGIN
   ALTER TABLE "media_locales" ADD CONSTRAINT "media_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_locales" ADD CONSTRAINT "pages_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_locales" ADD CONSTRAINT "_pages_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_locales" ADD CONSTRAINT "blog_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_v_locales" ADD CONSTRAINT "_blog_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE UNIQUE INDEX IF NOT EXISTS "media_locales_locale_parent_id_unique" ON "media_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_locales_locale_parent_id_unique" ON "pages_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pages_v_locales_locale_parent_id_unique" ON "_pages_v_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "blog_locales_locale_parent_id_unique" ON "blog_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_blog_v_locales_locale_parent_id_unique" ON "_blog_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "navigation_navigation_links_locale_idx" ON "navigation_navigation_links" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "navigation_rels_locale_idx" ON "navigation_rels" USING btree ("locale");
  CREATE INDEX IF NOT EXISTS "navigation_rels_pages_id_idx" ON "navigation_rels" USING btree ("pages_id","locale");
  ALTER TABLE "media" DROP COLUMN IF EXISTS "alt";
  ALTER TABLE "pages" DROP COLUMN IF EXISTS "title";
  ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "version_title";
  ALTER TABLE "blog" DROP COLUMN IF EXISTS "title";
  ALTER TABLE "_blog_v" DROP COLUMN IF EXISTS "version_title";
  ALTER TABLE "navigation_rels" DROP COLUMN IF EXISTS "blog_id";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "media_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "blog_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_blog_v_locales" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "media_locales" CASCADE;
  DROP TABLE "pages_locales" CASCADE;
  DROP TABLE "_pages_v_locales" CASCADE;
  DROP TABLE "blog_locales" CASCADE;
  DROP TABLE "_blog_v_locales" CASCADE;
  DROP INDEX IF EXISTS "navigation_navigation_links_locale_idx";
  DROP INDEX IF EXISTS "navigation_rels_locale_idx";
  DROP INDEX IF EXISTS "navigation_rels_pages_id_idx";
  ALTER TABLE "media" ADD COLUMN "alt" varchar NOT NULL;
  ALTER TABLE "pages" ADD COLUMN "title" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_title" varchar;
  ALTER TABLE "blog" ADD COLUMN "title" varchar;
  ALTER TABLE "_blog_v" ADD COLUMN "version_title" varchar;
  ALTER TABLE "navigation_rels" ADD COLUMN "blog_id" integer;
  DO $$ BEGIN
   ALTER TABLE "navigation_rels" ADD CONSTRAINT "navigation_rels_blog_fk" FOREIGN KEY ("blog_id") REFERENCES "public"."blog"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "navigation_rels_blog_id_idx" ON "navigation_rels" USING btree ("blog_id");
  CREATE INDEX IF NOT EXISTS "navigation_rels_pages_id_idx" ON "navigation_rels" USING btree ("pages_id");
  ALTER TABLE "navigation_navigation_links" DROP COLUMN IF EXISTS "_locale";
  ALTER TABLE "navigation_rels" DROP COLUMN IF EXISTS "locale";`)
}
