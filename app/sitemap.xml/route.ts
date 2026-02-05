import { NextResponse } from 'next/server';

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
    http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

  <url>
    <loc>https://fullswingsports.com/</loc>
    <lastmod>2026-02-05T05:14:28+00:00</lastmod>
    <priority>1.00</priority>
  </url>

  <url>
    <loc>https://fullswingsports.com/blog/</loc>
    <lastmod>2026-02-05T05:14:28+00:00</lastmod>
    <priority>0.80</priority>
  </url>

  <url>
    <loc>https://fullswingsports.com/mission/</loc>
    <lastmod>2026-02-05T05:14:28+00:00</lastmod>
    <priority>0.80</priority>
  </url>

  <url>
    <loc>https://fullswingsports.com/fss-kit-baseball-technology/</loc>
    <lastmod>2026-02-05T05:14:28+00:00</lastmod>
    <priority>0.80</priority>
  </url>

  <url>
    <loc>https://fullswingsports.com/fss-baseball-app/</loc>
    <lastmod>2026-02-05T05:14:28+00:00</lastmod>
    <priority>0.80</priority>
  </url>

  <url>
    <loc>https://fullswingsports.com/fss-baseball-facility/</loc>
    <lastmod>2026-02-05T05:14:28+00:00</lastmod>
    <priority>0.80</priority>
  </url>

  <url>
    <loc>https://fullswingsports.com/fss-baseball-programs/</loc>
    <lastmod>2026-02-05T05:14:28+00:00</lastmod>
    <priority>0.80</priority>
  </url>

  <url>
    <loc>https://fullswingsports.com/contact-sales/</loc>
    <lastmod>2026-02-05T05:14:28+00:00</lastmod>
    <priority>0.80</priority>
  </url>

  <url>
    <loc>https://fullswingsports.com/product-support/</loc>
    <lastmod>2026-02-05T05:14:28+00:00</lastmod>
    <priority>0.80</priority>
  </url>

  <url>
    <loc>https://fullswingsports.com/faqs/</loc>
    <lastmod>2026-02-05T05:14:28+00:00</lastmod>
    <priority>0.80</priority>
  </url>

  <url>
    <loc>https://fullswingsports.com/blog/baseball-launch-monitor/</loc>
    <lastmod>2026-02-05T05:14:28+00:00</lastmod>
    <priority>0.64</priority>
  </url>

  <url>
    <loc>https://fullswingsports.com/blog/baseball-swing-analyzer/</loc>
    <lastmod>2026-02-05T05:14:28+00:00</lastmod>
    <priority>0.64</priority>
  </url>

  <url>
    <loc>https://fullswingsports.com/blog/press-release-blog/</loc>
    <lastmod>2026-02-05T05:14:28+00:00</lastmod>
    <priority>0.64</priority>
  </url>

</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
