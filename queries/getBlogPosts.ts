import gql from 'cms/client'
import { draftMode } from 'next/headers'
import filterPosts from 'queries/filterPosts'

export default async (searchParams: { category: string | null; limit: number; token?: string }) => {
  const { isEnabled } = draftMode()
  const { category, limit = 6 } = searchParams
  const apiURL = new URL(`${process.env.NEXT_PUBLIC_CMS_URL}/graphql`)
  if (isEnabled && searchParams?.token) {
    apiURL.searchParams.append('token', searchParams.token)
  }
  const res = await gql(filterPosts, { category: category || '', limit: Number(limit) })
  const maxLength = res.data.posts.nodes.length
  res.data.isLastPage = maxLength < limit
  return res
}
