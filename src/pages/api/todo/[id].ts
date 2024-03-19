import type { APIRoute } from 'astro'
import { db, eq, Todo } from 'astro:db'

// チェックボックスのON/OFFを切り替える処理
export const POST: APIRoute = async ({ params, request, redirect }) => {
  const formData = await request.formData()
  const id = params.id as unknown as number
  const _finish = formData.get('finish')
  const finish = _finish === 'on' ? true : false

  await db.update(Todo).set({ finish }).where(eq(Todo.id, id))

  return new Response(null, {status: 204})
}

// Todoを削除する処理
export const GET: APIRoute = async ({ params, redirect }) => {
  // 型キャストはこういう書き方もできるのか。
  await db.delete(Todo).where(eq(Todo.id, Number(params.id)))
  
  return redirect('/')
}