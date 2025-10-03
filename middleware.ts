import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone()
  const hostname = req.headers.get('host') || ''

  if (
    url.pathname.startsWith('/_next') ||
    url.pathname.startsWith('/api') ||
    url.pathname.startsWith('/favicon.ico') ||
    url.pathname.startsWith('/robots.txt') ||
    url.pathname.startsWith('/sitemap.xml') ||
    url.pathname.includes('.') ||
    url.pathname.startsWith('/tenants/')
  ) {
    return NextResponse.next()
  }

  const subdomain = hostname.split('.')[0]
  const validTenants = ['branch1', 'branch2']

  if (hostname === 'softwarewow.co' || hostname === 'www.softwarewow.co' || subdomain === 'softwarewow') {
    url.pathname = `/tenants/default${url.pathname}`
    return NextResponse.rewrite(url)
  }

  if (validTenants.includes(subdomain)) {
    url.pathname = `/tenants/${subdomain}${url.pathname}`
    return NextResponse.rewrite(url)
  }

  return new NextResponse('Not found', { status: 404 })
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
