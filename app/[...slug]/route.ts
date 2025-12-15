import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { slug: string[] } }
) {
  const path = params.slug.join('/');
  
  // Only handle XML and XSL files
  if (!path.endsWith('.xml') && !path.endsWith('.xsl')) {
    return NextResponse.next();
  }
  
  const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL || 'https://shop.fullswingsports.com';
  
  try {
    const response = await fetch(`${cmsUrl}/${path}`, {
      next: { revalidate: 3600 }
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }
    
    let content = await response.text();
    
    // Fix CORS: Replace shop subdomain with main domain
    content = content.replace(
      /https?:\/\/shop\.fullswingsports\.com/g,
      'https://fullswingsports.com'
    );
    
    return new NextResponse(content, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    console.error(`Error fetching ${path}:`, error);
    return new NextResponse('Not Found', { 
      status: 404,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
}

export const dynamic = 'force-dynamic';
export const revalidate = 3600;
