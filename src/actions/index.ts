import { defineAction } from 'astro:actions'
import { z } from 'astro:content'
import { Posts, Subscriber, db, eq } from 'astro:db'

export const server = {
  subscribe: defineAction({
    accept: 'form',
    input: z.object({ email: z.string().email() }),
    handler: async ({ email }) => {
      await db.insert(Subscriber).values({ email, createdAt: new Date() })
      return email
    },
  }),
  addLike: defineAction({
    accept: 'form',
    input: z.object({ id: z.number() }),
    handler: async ({ id }) => {
      console.log(id)
      const targetPost = await db.select().from(Posts).where(eq(Posts.id, id))
      const likeCount = targetPost[0].like
      await db
        .update(Posts)
        .set({ like: likeCount + 1 })
        .where(eq(Posts.id, id))
    },
  }),
}
