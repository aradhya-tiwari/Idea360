CREATE TABLE `ideas` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text,
	`description` text,
	`industry` text,
	`chat` text,
	`approvedBy` text,
	`extras` text,
	`tags` text
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`email` text,
	`username` text,
	`password` text,
	`extra` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_username_unique` ON `users` (`username`);