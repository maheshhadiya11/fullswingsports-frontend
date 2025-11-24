import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

// eslint-disable-next-line import/prefer-default-export
export async function GET(request: Request) {
  // Parse query string parameters
  const { searchParams } = new URL(request.url)
  const token = encodeURIComponent(searchParams.get('token') || '')
  const url = searchParams.get('url')

  // Enable Draft Mode by setting the cookie
  draftMode().enable()

  // Redirect to the path from the fetched post
  // We don't redirect to searchParams.slug as that might lead to open redirect vulnerabilities
  redirect(`${url}?token=${token}`)
}
