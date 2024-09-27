import { column, defineDb, defineTable } from 'astro:db'

const Subscriber = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    email: column.text(),
    createdAt: column.date(),
  },
})

const Posts = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    author: column.text(),
    content: column.text(),
    like: column.number(),
    createdAt: column.date(),
  },
})

// https://astro.build/db/config
export default defineDb({
  tables: { Subscriber, Posts },
})
