import { DocumentNode } from 'graphql'
import { jwtDecode } from 'jwt-decode'
import convertGqlToString from '../utils/convertGqlToString'

const gql = async (
  query: DocumentNode,
  variables: { [x: string]: boolean | string | number | string[] } = {},
  uri: string = `${process.env.NEXT_PUBLIC_CMS_URL}/graphql`,
  headers: { [key: string]: string } = {},
) => {
  const extraHeaders = {}
  if (typeof window !== 'undefined') {
    extraHeaders['woocommerce-session'] = `Session ${window.localStorage.getItem('woo-session')}`
  }
  const res = await fetch(uri, {
    body: JSON.stringify({
      query: convertGqlToString(query),
      variables,
    }),
    headers: {
      'Content-Type': 'application/json',
      ...headers,
      ...extraHeaders,
    },
    method: 'POST',
    cache: uri.includes('token') ? 'no-cache' : undefined,
  })
  if (!res.ok) {
    throw new Error(await res.text())
  }
  if (
    typeof window !== 'undefined' &&
    res.headers.get('woocommerce-session') &&
    !window.localStorage.getItem('woocommerce-session')
  ) {
    const token = res.headers.get('woocommerce-session') as string
    window.localStorage.setItem('woo-session', token)
    const decoded = await jwtDecode<{ data: { customer_id: string } }>(token)
    window.localStorage.setItem('woo-cart-session', decoded.data.customer_id)
  }
  const json = await res.json()
  // actually display errors when they are returned from the gql api
  if (json?.errors) {
    throw new Error(JSON.stringify(json, null, 2))
  }
  return json
}

export default gql
