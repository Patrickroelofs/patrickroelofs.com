import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_grid_spacing" AS ENUM('3xs', '2xs', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl');
  CREATE TYPE "public"."enum_pages_blocks_sticky_title_spacing" AS ENUM('3xs', '2xs', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl');
  CREATE TYPE "public"."enum__pages_v_blocks_grid_spacing" AS ENUM('3xs', '2xs', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl');
  CREATE TYPE "public"."enum__pages_v_blocks_sticky_title_spacing" AS ENUM('3xs', '2xs', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl');
  ALTER TABLE "pages_blocks_grid" ADD COLUMN "spacing" "enum_pages_blocks_grid_spacing";
  ALTER TABLE "pages_blocks_sticky_title" ADD COLUMN "spacing" "enum_pages_blocks_sticky_title_spacing";
  ALTER TABLE "_pages_v_blocks_grid" ADD COLUMN "spacing" "enum__pages_v_blocks_grid_spacing";
  ALTER TABLE "_pages_v_blocks_sticky_title" ADD COLUMN "spacing" "enum__pages_v_blocks_sticky_title_spacing";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_grid" DROP COLUMN IF EXISTS "spacing";
  ALTER TABLE "pages_blocks_sticky_title" DROP COLUMN IF EXISTS "spacing";
  ALTER TABLE "_pages_v_blocks_grid" DROP COLUMN IF EXISTS "spacing";
  ALTER TABLE "_pages_v_blocks_sticky_title" DROP COLUMN IF EXISTS "spacing";
  DROP TYPE "public"."enum_pages_blocks_grid_spacing";
  DROP TYPE "public"."enum_pages_blocks_sticky_title_spacing";
  DROP TYPE "public"."enum__pages_v_blocks_grid_spacing";
  DROP TYPE "public"."enum__pages_v_blocks_sticky_title_spacing";`)
}
