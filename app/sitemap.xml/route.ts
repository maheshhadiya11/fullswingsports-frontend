import { NextResponse } from 'next/server';

export async function GET() {
  const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL || 'https://shop.fullswingsports.com';
  
  try {
    const response = await fetch(`${cmsUrl}/sitemap_index.xml`, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch sitemap: ${response.status}`);
    }
    
    let xml = await response.text();
    
    // Fix CORS: Replace shop subdomain with main domain
    xml = xml.replace(
      /https?:\/\/shop\.fullswingsports\.com/g,
      'https://fullswingsports.com'
    );
    
    return new NextResponse(xml, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    });
  } catch (error) {
    console.error('Error fetching sitemap:', error);
    return new NextResponse('Error loading sitemap', { 
      status: 500,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
}

export const dynamic = 'force-dynamic'; // or use 'force-static' for static generation
export const revalidate = 3600; // Revalidate every hour
