import React from 'react'
import {
  GlobalSettings,
  Page_Flexiblelayout_PageBuilder_FlexMultiGrid_Tabs_GridItems,
  Page_Flexiblelayout_PageBuilder_Hero,
  Post,
  Page as WPPage,
} from 'interfaces/types'
import BlogFilter from 'components/generic/filter/blogFilter'
import PaginatedChildren from 'components/generic/paginated_children/paginated_children'
import GridItem from 'components/modules/flex_multi_grid/flex_multi_grid_item'
import gql from 'cms/client'
import Hero from 'components/modules/hero/hero'
import FeatureClient from 'components/modules/feature_carousel/feature_carousel_client'
import Footer from 'components/generic/footer/footer'
import getBlogPosts from 'queries/getBlogPosts'
import BlogLandingQuery from 'queries/blogLanding'
import page from 'queries/page'

import { Metadata } from 'next'

export const dynamic = 'auto'

async function getPage(slug?: string[]) {
  const uri = slug ? `/${slug.join('/')}` : '/'
  const apiURL = new URL(`${process.env.NEXT_PUBLIC_CMS_URL}/graphql`)

  const variables = { uri } as { [key: string]: string | boolean }
  const headers = {} as { [key: string]: string }

  const response = await gql(page, variables, apiURL.toString(), headers)
  if (response.errors) {
    throw new Error(await JSON.stringify(response.errors))
  }

  return response.data
}

const getBlogLanding = async () => {
  return (await gql(BlogLandingQuery)).data.globalSettings
}

const Posts = async ({ searchParams }) => {
  const {
    data: { posts, isLastPage },
  } = await getBlogPosts(searchParams)

  const blogLandingData: GlobalSettings = await getBlogLanding()

  const {
    featuredPosts,
    filterTags,
    blogLandingCopy,
    blogLandingHeadline,
    blogPostFallbackImage,
    copy,
    cta,
    eyebrow,
    headline,
    media,
    secondaryCta,
  } = blogLandingData.glb

  const tags = filterTags.map((tag) => tag.name)

  const HeroData: Partial<Page_Flexiblelayout_PageBuilder_Hero> = {
    color: 'dark',
    copy: blogLandingCopy,
    headline: blogLandingHeadline,
    size: 'compact',
  }

  const featureData: any = {
    spacing: 'medium',
    mobileLayout: 'full',
    features: [
      {
        copy,
        cta,
        eyebrow,
        headline,
        media,
        secondaryCta,
      },
    ],
  }

  return (
    <main className="main blog-landing">
      <Hero
        module={HeroData}
        first
      />
      <BlogFilter tags={tags} />
      <PaginatedChildren
        isLastPage={isLastPage}
        featuredPosts={featuredPosts}
      >
        {posts.nodes.map((post: Post) => (
          <GridItem
            fallbackImage={blogPostFallbackImage}
            item={{ post } as Page_Flexiblelayout_PageBuilder_FlexMultiGrid_Tabs_GridItems}
            key={post.title}
            mobileCard={false}
            layout="four-up"
          />
        ))}
      </PaginatedChildren>
      <FeatureClient module={featureData} />
      <Footer />
    </main>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const allData: any = await getPage(['blog'])
  const pageData: WPPage = allData.page

  // check for 404
  if (!pageData || !pageData.id)
    return {
      title: '404 - Not found',
    }

  const { seo } = pageData
  
  const canonical = seo?.canonical?.replace(
    'https://shop.fullswingsports.com',
    'https://fullswingsports.com'
  )

  return {
    title: seo?.title,
    description: seo?.metaDesc,
    robots: {
      index: seo?.metaRobotsNoindex === 'index',
      follow: seo?.metaRobotsNofollow === 'follow',
    },
    alternates: {
      canonical: canonical,
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

export default Posts
