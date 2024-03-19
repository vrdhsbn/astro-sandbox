import { column, defineDb, defineTable } from 'astro:db';

// このファイルにPrismaで言うところのスキーマ的な内容を書いていく。

// テーブルの定義
const Todo = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text(),
    finish: column.boolean()
  }
})

// DBの定義
// https://astro.build/db/config
export default defineDb({
  tables: {
    Todo
  }
});
