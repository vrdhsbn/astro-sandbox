import { Posts, db } from 'astro:db'

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Posts).values([
    { author: 'yamada', content: 'ほげほげ～', like: 45, createdAt: new Date() },
    { author: 'tanaka', content: 'こんにちは！', like: 3, createdAt: new Date() },
    { author: 'koma', content: 'スタバなう', like: 723, createdAt: new Date() },
  ])
}
