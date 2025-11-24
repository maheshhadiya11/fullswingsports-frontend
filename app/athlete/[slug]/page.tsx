import React from 'react'
import gql from 'cms/client'
import Repeater from 'components/generic/repeater/repeater'
import { notFound } from 'next/navigation'
import athlete from 'queries/athlete'
import allAthletes from 'queries/allAthletes'
import {
  GlobalSettings_Glb_TeamMembers,
  Page_Flexiblelayout_PageBuilder_Hero,
  Athlete as WPAthlete,
} from 'interfaces/types'
import HeroModule from 'components/modules/hero/hero'
import TeamToutModule from 'components/modules/team_tout/team_tout'
import Footer from 'components/generic/footer/footer'
import { Metadata } from 'next'

type SearchParams = { [key: string]: string | string[] | undefined }

async function getAthlete(slug?: string[], searchParams?: SearchParams) {
  const apiURL = new URL(`${process.env.NEXT_PUBLIC_CMS_URL}/graphql`)

  const variables = { slug } as { [key: string]: string | boolean | string[] }
  const headers = {} as { [key: string]: string }

  if (searchParams?.token) {
    const response = await gql(athlete, variables, apiURL.toString(), headers)
    const id = response?.data?.athlete?.databaseId

    if (id) {
      headers.Authorization = `Basic ${searchParams.token}`
      variables.asPreview = true
      variables.idType = 'DATABASE_ID'
      variables.slug = id.toString()
    }
  }

  const response = await gql(athlete, variables, apiURL.toString(), headers)

  if (response.errors) {
    throw new Error(await JSON.stringify(response.errors))
  }

  return response.data
}

const Athlete = async ({ params, searchParams }: { params: { slug?: string[] }; searchParams?: SearchParams }) => {
  const allData = await getAthlete(params?.slug, searchParams)
  const pageData: WPAthlete = allData.athlete
  const teamData: GlobalSettings_Glb_TeamMembers[] = allData.globalSettings?.glb?.teamMembers
  // check for 404
  if (!pageData || !pageData.id) return notFound()

  const athleteHero = {
    ...pageData.athleteLayout.athleteHero,
    color: 'light',
  } as Page_Flexiblelayout_PageBuilder_Hero

  return (
    <main className="main athlete">
      <div className="background-wrap overlap-stretch">
        {athleteHero && (
          <HeroModule
            module={athleteHero}
            first
          />
        )}
        <TeamToutModule
          currentAthlete={pageData}
          team={teamData}
        />
      </div>
      {pageData && (
        <Repeater
          prefix="Athlete"
          modules={pageData.athleteLayout.pageBuilder}
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
  const allData: any = await getAthlete(params?.slug)
  const pageData: WPAthlete = allData.athlete

  // check for 404
  if (!pageData || !pageData.id)
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
  const pages = (await gql(allAthletes)).data.athletes.nodes
  return pages.map((p: { slug: string }) => ({
    slug: p.slug,
  }))
}

export default Athlete
