import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`pages_blocks_hero_block_stories\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_hero_block_stories\`;`)
  await db.run(sql`ALTER TABLE \`pages_blocks_hero_block\` DROP COLUMN \`description\`;`)
  await db.run(sql`ALTER TABLE \`_pages_v_blocks_hero_block\` DROP COLUMN \`description\`;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`pages_blocks_hero_block_stories\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`story\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_hero_block\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_block_stories_order_idx\` ON \`pages_blocks_hero_block_stories\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_block_stories_parent_id_idx\` ON \`pages_blocks_hero_block_stories\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_hero_block_stories\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`story\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_hero_block\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_hero_block_stories_order_idx\` ON \`_pages_v_blocks_hero_block_stories\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_hero_block_stories_parent_id_idx\` ON \`_pages_v_blocks_hero_block_stories\` (\`_parent_id\`);`)
  await db.run(sql`ALTER TABLE \`pages_blocks_hero_block\` ADD \`description\` text;`)
  await db.run(sql`ALTER TABLE \`_pages_v_blocks_hero_block\` ADD \`description\` text;`)
}
