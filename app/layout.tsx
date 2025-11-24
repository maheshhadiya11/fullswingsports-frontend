import React from 'react'
import Header from 'components/generic/header/header'
import 'tailwindcss/tailwind.css'
import 'normalize.css'
import '../styles/globals.scss'
import DevGrid from 'components/generic/devGrid/devGrid'
import Notification from 'components/generic/notification/notification'
import ZenDeskClient from 'components/generic/zen_desk_client/zen_desk_client'
import ZapierChatbot from "components/generic/ZapierChatbot";

export const dynamic = 'force-static'

const SiteLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <head>
      <link
        rel="icon"
        href="/favicon.png"
        type="image/png"
      />
      <link
        rel="stylesheet"
        href="https://use.typekit.net/ifs0qcr.css"
      />
      {process.env.NEXT_PUBLIC_ENVIRONMENT !== 'development' && (
        <>
          <script
            id="ze-snippet"
            src="https://static.zdassets.com/ekr/snippet.js?key=d7793153-837d-402d-977b-0fbe15cf17cc"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-57ZV5NWX');
        `,
            }}
          />
        </>
      )}

      {process.env.NEXT_PUBLIC_AFFIRM_API_KEY && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
                _affirm_config = {
                  public_api_key: "${process.env.NEXT_PUBLIC_AFFIRM_API_KEY}",
                  script: "https://cdn1-sandbox.affirm.com/js/v2/affirm.js"
                };
                (function(l,g,m,e,a,f,b){var d,c=l[m]||{},h=document.createElement(f),n=document.getElementsByTagName(f)[0],k=function(a,b,c){return function(){a[b]._.push([c,arguments])}};c[e]=k(c,e,"set");d=c[e];c[a]={};c[a]._=[];d._=[];c[a][b]=k(c,a,b);a=0;for(b="set add save post open empty reset on off trigger ready setProduct".split(" ");a<b.length;a++)d[b[a]]=k(c,e,b[a]);a=0;for(b=["get","token","url","items"];a<b.length;a++)d[b[a]]=function(){};h.async=!0;h.src=g[f];n.parentNode.insertBefore(h,n);delete g[f];d(g);l[m]=c})(window,_affirm_config,"affirm","checkout","ui","script","ready");
              `,
          }}
        />
      )}
    </head>
    <body>
      <noscript>
        <iframe
          title="GTM"
          src="https://www.googletagmanager.com/ns.html?id=GTM-57ZV5NWX"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
      <Notification />
      <ZenDeskClient /> 
      <Header />
      {children}
      <DevGrid />
        <ZapierChatbot />
    </body>
  </html>
)

export default SiteLayout
