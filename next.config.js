const CMS_DOMAIN = new URL(process.env.NEXT_PUBLIC_CMS_URL)

function createHasArrayFromSource(source) {
  const url = new URL(source, CMS_DOMAIN) // Base URL is needed for the URL constructor
  const params = Array.from(url.searchParams.entries())

  const hasParameters = params.map(([key, value]) => {
    return { type: 'query', key, value }
  })
  return hasParameters
}

const removeTrailingSlash = (str) => {
  return str.replace(/\/+$/, '')
}

module.exports = {
  images: {
    domains: [CMS_DOMAIN.host],
    formats: ['image/webp'],
    // Enable for AVIF support
    // formats: ['image/avif', 'image/webp'],
  },
  trailingSlash: true,
  async redirects() {
    const r = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/graphql`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        query: `
        query Redirects {
          redirects {
            match_url
            action_data
          }
        }
        `,
      }),
    })
    const { data } = await r.json()

    const cms_redirects = data?.redirects
      ?.map(({ match_url, action_data }) => ({
        source: match_url.split('?')[0],
        destination: action_data,
        has: createHasArrayFromSource(match_url),
        permanent: true,
      }))
      .filter(({ source }) => source.charAt(0) === '/' && source.length > 1)
      .filter(({ source, destination }) => removeTrailingSlash(source) !== removeTrailingSlash(destination))
    // console.log('redirects', JSON.stringify(cms_redirects))
    return [
      {
        source: '/wc-api/:path*',
        destination: `${process.env.NEXT_PUBLIC_CMS_URL}/wc-api/:path*`,
        permanent: false,
      },
      ...cms_redirects,
      {
        source: '/golf-simulator-news',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/bundles',
        destination: `${process.env.NEXT_PUBLIC_CMS_URL}/bundles`,
        permanent: true,
      },
      {
        source: '/shop',
        destination: '/',
        permanent: false,
      },
      {
        source: '/wp-:slug/:path*',
        destination: `${process.env.NEXT_PUBLIC_CMS_URL}/wp-:slug/:path*`,
        permanent: false,
      },
      {
        source: '/checkout/:path*',
        destination: `${process.env.NEXT_PUBLIC_CMS_URL}/checkout/:path*`,
        permanent: false,
      },
      // {
      //   source: '/:year/:month/:day/:slug*',
      //   destination: '/blog/:slug*',
      //   permanent: true,
      // },
      {
        source: '/product-gallery',
        destination: '/',
        permanent: true,
      },
      {
        source: '/contact-us-form',
        destination: '/contact-sales',
        permanent: true,
      },
      {
        source: '/product-videos',
        destination: '/',
        permanent: true,
      },
      {
        source: '/team/tiger-woods-golf-simulator',
        destination: '/athlete/tiger-woods',
        permanent: true,
      },
      {
        source: '/applications',
        destination: '/plan-your-space',
        permanent: true,
      },
      {
        source: '/applications/golf-simulator-for-home',
        destination: '/simulator-for-home',
        permanent: true,
      },
      {
        source: '/applications/commercial-golf-simulator',
        destination: '/simulator-for-business',
        permanent: true,
      },
      {
        source: '/applications/clubhouses-2',
        destination: '/simulator-for-clubhouse',
        permanent: true,
      },
      {
        source: '/applications/swing-suite',
        destination: '/simulator-for-business',
        permanent: true,
      },
      {
        source: '/applications/college-golf-simulator-training',
        destination: '/simulator-for-clubhouse',
        permanent: true,
      },
      {
        source: '/technology',
        destination: '/full-swing-golf-software',
        permanent: true,
      },
      {
        source: '/technology/full-swing-golf-software',
        destination: '/full-swing-golf-software',
        permanent: true,
      },
      {
        source: '/technology/swing-analysis',
        destination: '/swing-catalyst',
        permanent: true,
      },
      {
        source: '/technology/multisport-gaming',
        destination: '/full-swing-games-software',
        permanent: true,
      },
      {
        source: '/kit-launch-monitor/kit-technology',
        destination: '/kit-launch-monitor-technology',
        permanent: true,
      },
      {
        source: '/kit-launch-monitor/kit-launch-monitor-app',
        destination: '/kit-launch-monitor-app',
        permanent: true,
      },
      {
        source: '/kit-launch-monitor/tiger-woods-launch-monitor',
        destination: '/athlete/tiger-woods',
        permanent: true,
      },
      {
        source: '/kit-launch-monitor/kit-for-instructors',
        destination: '/kit-launch-monitor-instructors',
        permanent: true,
      },
      {
        source: '/kit-launch-monitor/indoor-gameplay',
        destination: '/full-swing-studio',
        permanent: true,
      },
      {
        source: '/kit-launch-monitor/kit-launch-monitor-accessories',
        destination: '/kit-launch-monitor/kit-launch-monitor-accessories',
        permanent: true,
      },
      {
        source: '/product/kit-launch-monitor',
        destination: '/kit-launch-monitor',
        permanent: true,
      },
      {
        source: '/golf-simulator',
        destination: '/pro-series-simulator',
        permanent: true,
      },
      {
        source: '/golf-simulator/pro-series-simulator',
        destination: '/pro-series-simulator',
        permanent: true,
      },
      {
        source: '/golf-simulator/sport-series-simulator',
        destination: '/sport-series-simulator',
        permanent: true,
      },
      {
        source: '/golf-simulator/virtual-putting-green',
        destination: '/virtual-green',
        permanent: true,
      },
      {
        source: '/company',
        destination: '/mission',
        permanent: true,
      },
      {
        source: '/company/faqs',
        destination: '/faqs',
        permanent: true,
      },
      {
        source: '/kit-launch-monitor/kit-support',
        destination: 'https://kitsupport.fullswinggolf.com/hc/en-us',
        permanent: true,
      },
      {
        source: '/contact-us-form',
        destination: '/contact-sales',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: `${process.env.NEXT_PUBLIC_CMS_URL}/sitemap_index.xml`,
      },
      {
        source: '/main-sitemap.xsl',
        destination: `${process.env.NEXT_PUBLIC_CMS_URL}/main-sitemap.xsl`,
      },
      {
        source: '/:path*-sitemap.xml',
        destination: 'https://shop.fullswingsports.com/:path*-sitemap.xml'
      },
      {
        source: '/wp-content/plugins/wordpress-seo/css/main-sitemap.xsl',
        destination: `${process.env.NEXT_PUBLIC_CMS_URL}/wp-content/plugins/wordpress-seo/css/main-sitemap.xsl`,
      },
      {
        source: '/wc-api/WC_Gateway_Affirm',
        destination: `${process.env.NEXT_PUBLIC_CMS_URL}wc-api/WC_Gateway_Affirm`,
      },
      {
        source: '/post-sitemap.xml',
        destination: `${process.env.NEXT_PUBLIC_CMS_URL}/post-sitemap.xml`,
      },
      {
        source: '/page-sitemap.xml',
        destination: `${process.env.NEXT_PUBLIC_CMS_URL}/page-sitemap.xml`,
      },
      {
        source: '/athlete-sitemap.xml',
        destination: `${process.env.NEXT_PUBLIC_CMS_URL}/athlete-sitemap.xml`,
      },
      {
        source: '/bundle-sitemap.xml',
        destination: `${process.env.NEXT_PUBLIC_CMS_URL}/bundle-sitemap.xml`,
      },
      {
        source: '/product-sitemap.xml',
        destination: `${process.env.NEXT_PUBLIC_CMS_URL}/product-sitemap.xml`,
      },
      {
        source: '/category-sitemap.xml',
        destination: `${process.env.NEXT_PUBLIC_CMS_URL}/category-sitemap.xml`,
      },
      {
        source: '/product_cat-sitemap.xml',
        destination: `${process.env.NEXT_PUBLIC_CMS_URL}/product_cat-sitemap.xml`,
      },
      {
        source: '/product_shipping_class-sitemap.xml',
        destination: `${process.env.NEXT_PUBLIC_CMS_URL}/product_shipping_class-sitemap.xml`,
      },
      {
        source: '/author-sitemap.xml',
        destination: `${process.env.NEXT_PUBLIC_CMS_URL}/author-sitemap.xml`,
      },
    ]
  },

  async headers() {
    return [
      {
        source: "/sitemap.xml",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: 'https://shop.fullswingsports.com/',
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type",
          },
        ],
      },
    ];
  },


}
