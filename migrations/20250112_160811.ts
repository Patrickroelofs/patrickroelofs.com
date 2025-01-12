import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "site_settings_navigation_nav_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"link_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "site_settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"site_title" varchar NOT NULL,
  	"site_description" varchar,
  	"search_engine_optimization_favicon_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  DO $$ BEGIN
   ALTER TABLE "site_settings_navigation_nav_links" ADD CONSTRAINT "site_settings_navigation_nav_links_link_id_pages_id_fk" FOREIGN KEY ("link_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "site_settings_navigation_nav_links" ADD CONSTRAINT "site_settings_navigation_nav_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_search_engine_optimization_favicon_id_media_id_fk" FOREIGN KEY ("search_engine_optimization_favicon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "site_settings_navigation_nav_links_order_idx" ON "site_settings_navigation_nav_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "site_settings_navigation_nav_links_parent_id_idx" ON "site_settings_navigation_nav_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "site_settings_navigation_nav_links_link_idx" ON "site_settings_navigation_nav_links" USING btree ("link_id");
  CREATE INDEX IF NOT EXISTS "site_settings_search_engine_optimization_search_engine_optimization_favicon_idx" ON "site_settings" USING btree ("search_engine_optimization_favicon_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "site_settings_navigation_nav_links" CASCADE;
  DROP TABLE "site_settings" CASCADE;`)
}
