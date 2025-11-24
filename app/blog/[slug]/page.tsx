import React from 'react'
import gql from 'cms/client'
import Repeater from 'components/generic/repeater/repeater'
import { notFound } from 'next/navigation'
import post from 'queries/post'
import allPosts from 'queries/allPosts'
import {
  Page_Flexiblelayout_PageBuilder_FlexMultiGrid,
  Page_Flexiblelayout_PageBuilder_Hero,
  Post as WPPost,
} from 'interfaces/types'
import HeroModule from 'components/modules/hero/hero'
import FlexMultiGridModule from 'components/modules/flex_multi_grid/flex_multi_grid'
import dayjs from 'dayjs'
import Footer from 'components/generic/footer/footer'
import { Metadata } from 'next'

type SearchParams = { [key: string]: string | string[] | undefined }

async function getPost(slug?: string[], searchParams?: SearchParams) {
  const apiURL = new URL(`${process.env.NEXT_PUBLIC_CMS_URL}/graphql`)

  const variables = { uri: slug } as { [key: string]: string | boolean | string[] }
  const headers = {} as { [key: string]: string }

  if (searchParams?.token) {
    const response = await gql(post, variables, apiURL.toString(), headers)
    const id = response?.data?.post?.databaseId

    if (id) {
      headers.Authorization = `Basic ${searchParams.token}`
      variables.asPreview = true
      variables.idType = 'DATABASE_ID'
      variables.uri = id.toString()
    }
  }

  const response = await gql(post, variables, apiURL.toString(), headers)

  if (response.errors) {
    throw new Error(await JSON.stringify(response.errors))
  }

  return response.data
}

const Post = async ({ params, searchParams }: { params: { slug?: string[] }; searchParams?: SearchParams }) => {
  const postData: WPPost = (await getPost(params?.slug, searchParams)).post
  // check for 404
  if (!postData || !postData.id) return notFound()

  const postHero = {
    ...postData.postLayout.postHero,
    eyebrow: postData.postLayout.postHero.eyebrow || postData.categories.nodes[0].name,
    headline: postData.postLayout.postHero.headline || postData.title,
    copy: postData.date && `Posted: ${dayjs(postData.date).format('MMMM D, YYYY')}`,
    color: 'light',
    layout: 'post',
  } as Page_Flexiblelayout_PageBuilder_Hero

  const relatedContent =
    postData.postLayout?.relatedContent?.posts?.length &&
    ({
      headline: 'Related Content',
      layout: 'two-up',
      layoutMode: 'fullWidth',
      tabs: [{ gridItems: postData.postLayout.relatedContent.posts }],
      spacing: 'medium',
    } as Page_Flexiblelayout_PageBuilder_FlexMultiGrid)

  return (
    <main className="main">
      {postHero && <HeroModule className="mb-40 md:mb-72 xl:mb-52 xxl:mb-96" module={postHero} />}
      {postData && (
        <Repeater
          prefix="Post"
          modules={postData.postLayout.pageBuilder}
        />
      )}
      {relatedContent && <FlexMultiGridModule module={relatedContent} />}
      <Footer />
      <script
        id="schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(postData.seo?.schema?.raw || '') }}
      />
    </main>
  )
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const postData: WPPost = (await getPost(params?.slug)).post
  // check for 404
  if (!postData || !postData.id)
    return {
      title: '404 - Not found',
    }

  const { seo } = postData

  return {
    title: seo?.title,
    description: seo?.metaDesc,
    robots: {
      index: seo?.metaRobotsNoindex === 'index',
      follow: seo?.metaRobotsNofollow === 'follow',
    },
    alternates: {
      canonical: seo?.canonical,
    },
    keywords: seo?.metaKeywords,
    twitter: {
      card: 'summary_large_image',
      title: (seo?.twitterTitle || seo?.title) as string,
      description: seo?.twitterDescription || seo?.metaDesc,
      images: seo?.twitterImage?.sourceUrl,
    },

    openGraph: {
      type: seo?.opengraphType as any,
      title: (seo?.opengraphTitle || seo?.title) as string,
      description: seo?.opengraphDescription || seo?.metaDesc,
      url: seo?.opengraphUrl,
      siteName: seo?.opengraphSiteName,
      modifiedTime: seo?.opengraphModifiedTime,
      images: seo?.opengraphImage?.sourceUrl,
    },
  }
}

export const generateStaticParams = async () => {
  const pages = (await gql(allPosts)).data.posts.nodes
  return pages.map((p: { slug: string }) => ({
    slug: p.slug,
  }))
}

export default Post
