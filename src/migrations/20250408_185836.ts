import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_pages_blocks_grid_columns" ADD VALUE '2' BEFORE '3';
  ALTER TYPE "public"."enum__pages_v_blocks_grid_columns" ADD VALUE '2' BEFORE '3';
  ALTER TABLE "pages_blocks_feature_card" ADD COLUMN "title" varchar;
  ALTER TABLE "_pages_v_blocks_feature_card" ADD COLUMN "title" varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_feature_card" DROP COLUMN IF EXISTS "title";
  ALTER TABLE "_pages_v_blocks_feature_card" DROP COLUMN IF EXISTS "title";
  ALTER TABLE "public"."pages_blocks_grid" ALTER COLUMN "columns" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_grid_columns";
  CREATE TYPE "public"."enum_pages_blocks_grid_columns" AS ENUM('3');
  ALTER TABLE "public"."pages_blocks_grid" ALTER COLUMN "columns" SET DATA TYPE "public"."enum_pages_blocks_grid_columns" USING "columns"::"public"."enum_pages_blocks_grid_columns";
  ALTER TABLE "public"."_pages_v_blocks_grid" ALTER COLUMN "columns" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_grid_columns";
  CREATE TYPE "public"."enum__pages_v_blocks_grid_columns" AS ENUM('3');
  ALTER TABLE "public"."_pages_v_blocks_grid" ALTER COLUMN "columns" SET DATA TYPE "public"."enum__pages_v_blocks_grid_columns" USING "columns"::"public"."enum__pages_v_blocks_grid_columns";`)
}
