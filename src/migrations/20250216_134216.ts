import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`pages_blocks_hero_block_locales\` (
  	\`title\` text,
  	\`description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_hero_block\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`pages_blocks_hero_block_locales_locale_parent_id_unique\` ON \`pages_blocks_hero_block_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_hero_block_locales\` (
  	\`title\` text,
  	\`description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_hero_block\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_pages_v_blocks_hero_block_locales_locale_parent_id_unique\` ON \`_pages_v_blocks_hero_block_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`ALTER TABLE \`pages_blocks_hero_block_stories\` ADD \`_locale\` text NOT NULL;`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_block_stories_locale_idx\` ON \`pages_blocks_hero_block_stories\` (\`_locale\`);`)
  await db.run(sql`ALTER TABLE \`_pages_v_blocks_hero_block_stories\` ADD \`_locale\` text NOT NULL;`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_hero_block_stories_locale_idx\` ON \`_pages_v_blocks_hero_block_stories\` (\`_locale\`);`)
  await db.run(sql`ALTER TABLE \`pages_blocks_hero_block\` DROP COLUMN \`title\`;`)
  await db.run(sql`ALTER TABLE \`pages_blocks_hero_block\` DROP COLUMN \`description\`;`)
  await db.run(sql`ALTER TABLE \`_pages_v_blocks_hero_block\` DROP COLUMN \`title\`;`)
  await db.run(sql`ALTER TABLE \`_pages_v_blocks_hero_block\` DROP COLUMN \`description\`;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`pages_blocks_hero_block_locales\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_hero_block_locales\`;`)
  await db.run(sql`DROP INDEX IF EXISTS \`pages_blocks_hero_block_stories_locale_idx\`;`)
  await db.run(sql`ALTER TABLE \`pages_blocks_hero_block_stories\` DROP COLUMN \`_locale\`;`)
  await db.run(sql`DROP INDEX IF EXISTS \`_pages_v_blocks_hero_block_stories_locale_idx\`;`)
  await db.run(sql`ALTER TABLE \`_pages_v_blocks_hero_block_stories\` DROP COLUMN \`_locale\`;`)
  await db.run(sql`ALTER TABLE \`pages_blocks_hero_block\` ADD \`title\` text;`)
  await db.run(sql`ALTER TABLE \`pages_blocks_hero_block\` ADD \`description\` text;`)
  await db.run(sql`ALTER TABLE \`_pages_v_blocks_hero_block\` ADD \`title\` text;`)
  await db.run(sql`ALTER TABLE \`_pages_v_blocks_hero_block\` ADD \`description\` text;`)
}
