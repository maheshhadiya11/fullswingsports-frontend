import React from 'react'
import gql from 'cms/client'
import Repeater from 'components/generic/repeater/repeater'
import { notFound } from 'next/navigation'
import page from 'queries/page'
import allPages from 'queries/allPages'
import { Page as WPPage } from 'interfaces/types'
import Footer from 'components/generic/footer/footer'
import { Metadata } from 'next'

const slugExcludes = ['shop', 'cart', 'checkout', 'blog']

type SearchParams = { [key: string]: string | string[] | undefined }

async function getPage(slug?: string[], searchParams?: SearchParams) {
  const uri = slug ? `/${slug.join('/')}` : '/'
  const apiURL = new URL(`${process.env.NEXT_PUBLIC_CMS_URL}/graphql`)

    const timestamp = Date.now()
  const variables: {
    uri: string;
  } & Record<string, string | boolean | number> = {
    uri,
    _cacheBuster: timestamp
  }
  const headers: {
    'Cache-Control': string;
    'Pragma': string;
    'Expires': string;
    'X-Cache-Buster': string;
    'Authorization'?: string; // Optional because it's added conditionally
  } = {
    'Cache-Control': 'no-store, max-age=0',
    'Pragma': 'no-cache',
    'Expires': '0',
    'X-Cache-Buster': timestamp.toString()
  }

  // const variables = { uri } as { [key: string]: string | boolean }
  // const headers = {} as { [key: string]: string }

  if (searchParams?.token) {
    const response = await gql(page, variables, apiURL.toString(), headers)
    const id = response?.data?.page?.databaseId

    if (id) {
      headers.Authorization = `Basic ${searchParams.token}`
      variables.asPreview = true
      variables.idType = 'DATABASE_ID'
      variables.uri = id.toString()
    }
  }

  const response = await gql(page, variables, apiURL.toString(), headers)
  if (response.errors) {
    throw new Error(await JSON.stringify(response.errors))
  }

  return response.data
}

const Page = async ({ params, searchParams }: { params: { slug?: string[] }; searchParams?: SearchParams }) => {
  const allData: any = await getPage(params?.slug, searchParams)
  const pageData: WPPage = allData.page
  // check for 404
  if (!pageData || !pageData.id || slugExcludes.some((v) => params.slug?.includes(v))) return notFound()

  return (
    <main className="main">
      {pageData && (
        <Repeater
          prefix="Page"
          global={allData.globalSettings?.glb}
          modules={pageData.flexibleLayout.pageBuilder}
        />
      )}
      <Footer />
      <script
        id="schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageData.seo?.schema?.raw || '') }}
      />
    </main>
  )
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const allData: any = await getPage(params?.slug)
  const pageData: WPPage = allData.page

  // check for 404
  if (!pageData || !pageData.id || slugExcludes.some((v) => params.slug?.includes(v)))
    return {
      title: '404 - Not found',
    }

  const { seo } = pageData

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
  const pages = (await gql(allPages)).data.pages.nodes
  const pa = pages
    .map((p) => ({
      slug: p.uri.split('/').filter(Boolean),
    }))
    .filter((p) => p.slug !== 'blog' && !slugExcludes.some((v) => p.slug.includes(v)))
  return pa
}

// export const dynamic = 'force-static'
export const dynamic = 'force-dynamic'

export default Page
