import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
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
  await db.run(sql`CREATE TABLE \`pages_blocks_hero_block\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	\`title\` text,
  	\`description\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_block_order_idx\` ON \`pages_blocks_hero_block\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_block_parent_id_idx\` ON \`pages_blocks_hero_block\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_block_path_idx\` ON \`pages_blocks_hero_block\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_block_image_idx\` ON \`pages_blocks_hero_block\` (\`image_id\`);`)
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
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_hero_block\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	\`title\` text,
  	\`description\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_hero_block_order_idx\` ON \`_pages_v_blocks_hero_block\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_hero_block_parent_id_idx\` ON \`_pages_v_blocks_hero_block\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_hero_block_path_idx\` ON \`_pages_v_blocks_hero_block\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_hero_block_image_idx\` ON \`_pages_v_blocks_hero_block\` (\`image_id\`);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`pages_blocks_hero_block_stories\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_hero_block\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_hero_block_stories\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_hero_block\`;`)
}
