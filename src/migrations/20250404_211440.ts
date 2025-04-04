import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_rich_text_spacing" AS ENUM('3xs', '2xs', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl');
  CREATE TYPE "public"."enum__pages_v_blocks_rich_text_spacing" AS ENUM('3xs', '2xs', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl');
  ALTER TABLE "pages_blocks_rich_text" ADD COLUMN "spacing" "enum_pages_blocks_rich_text_spacing";
  ALTER TABLE "_pages_v_blocks_rich_text" ADD COLUMN "spacing" "enum__pages_v_blocks_rich_text_spacing";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_rich_text" DROP COLUMN IF EXISTS "spacing";
  ALTER TABLE "_pages_v_blocks_rich_text" DROP COLUMN IF EXISTS "spacing";
  DROP TYPE "public"."enum_pages_blocks_rich_text_spacing";
  DROP TYPE "public"."enum__pages_v_blocks_rich_text_spacing";`)
}
