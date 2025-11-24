import React from 'react'
import gql from 'cms/client'
import Repeater from 'components/generic/repeater/repeater'
import page from 'queries/page'
import { Page as WPPage } from 'interfaces/types'
import Footer from 'components/generic/footer/footer'

type SearchParams = { [key: string]: string | string[] | undefined }

async function getPage(slug?: string[], searchParams?: SearchParams) {
  const uri = `/404-2/`
  const apiURL = new URL(`${process.env.NEXT_PUBLIC_CMS_URL}/graphql`)

  const variables = { uri } as { [key: string]: string | boolean }
  const headers = {} as { [key: string]: string }

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

const PageNotFound = async ({ params, searchParams }: { params: { slug?: string[] }; searchParams?: SearchParams }) => {
  const pageData: WPPage = (await getPage(params?.slug, searchParams)).page
  return pageData ? (
    <main className="main not-found">
      <Repeater
        prefix="Page"
        modules={pageData.flexibleLayout.pageBuilder}
      />
      <Footer />
    </main>
  ) : (
    <h1>404 not found</h1>
  )
}

export default PageNotFound
