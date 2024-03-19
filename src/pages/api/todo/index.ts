import type { APIRoute } from 'astro'
import { db, Todo } from 'astro:db'

// SSGとSSRとではエンドポイントの挙動が異なる。
// SSGではビルド時に呼び出され、SSRではリクエストに応じて呼び出される。
// エンドポイントは /pages ディレクトリ以下に追加する。

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData()
  const title = formData.get('title')
  if (typeof title === 'string') {
    await db.insert(Todo).values({title, finish: false})
  }
  return redirect('/')
}