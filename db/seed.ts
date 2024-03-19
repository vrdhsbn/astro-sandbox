import { db, Todo } from 'astro:db';

// このファイルにはdevやdebugに使うためのデータを記述する。
// とうぜん永続化はされない。

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Todo).values([
		{ id: 1, title: "Astro", finish: false },
		{ id: 2, title: "React", finish: true },
	])
}
