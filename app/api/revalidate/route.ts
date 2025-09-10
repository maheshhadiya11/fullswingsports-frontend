import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

// eslint-disable-next-line import/prefer-default-export
export async function POST(request: NextRequest) {
  const body = await request.json()
  if (!body) return NextResponse.json({ revalidated: false })
  const { url } = body
  revalidatePath(url)
  return NextResponse.json({ revalidated: true })
}
