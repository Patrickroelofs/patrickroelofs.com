import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`pages_blocks_big_list_block_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`link_id\` integer,
  	FOREIGN KEY (\`link_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_big_list_block\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_big_list_block_items_order_idx\` ON \`pages_blocks_big_list_block_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_big_list_block_items_parent_id_idx\` ON \`pages_blocks_big_list_block_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_big_list_block_items_link_idx\` ON \`pages_blocks_big_list_block_items\` (\`link_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_big_list_block\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_big_list_block_order_idx\` ON \`pages_blocks_big_list_block\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_big_list_block_parent_id_idx\` ON \`pages_blocks_big_list_block\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_big_list_block_path_idx\` ON \`pages_blocks_big_list_block\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_big_list_block_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`link_id\` integer,
  	\`_uuid\` text,
  	FOREIGN KEY (\`link_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_big_list_block\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_big_list_block_items_order_idx\` ON \`_pages_v_blocks_big_list_block_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_big_list_block_items_parent_id_idx\` ON \`_pages_v_blocks_big_list_block_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_big_list_block_items_link_idx\` ON \`_pages_v_blocks_big_list_block_items\` (\`link_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_big_list_block\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_big_list_block_order_idx\` ON \`_pages_v_blocks_big_list_block\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_big_list_block_parent_id_idx\` ON \`_pages_v_blocks_big_list_block\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_big_list_block_path_idx\` ON \`_pages_v_blocks_big_list_block\` (\`_path\`);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`pages_blocks_big_list_block_items\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_big_list_block\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_big_list_block_items\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_big_list_block\`;`)
}
