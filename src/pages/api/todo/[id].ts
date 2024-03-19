import type { APIRoute } from 'astro'
import { db, eq, Todo } from 'astro:db'

export const POST: APIRoute = async ({ params, request, redirect }) => {
  const formData = await request.formData()
  const id = params.id as unknown as number
  const _finish = formData.get('finish')
  const finish = _finish === 'on' ? true : false


  console.log(finish)
  console.log(params.id)

  await db.update(Todo).set({ finish }).where(eq(Todo.id, id))

  return new Response(null, {status: 204})
}