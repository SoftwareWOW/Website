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

  const validTenants = ['branch1', 'branch2']

  const cleanHostname = hostname.split(':')[0]
  const parts = cleanHostname.split('.')

  let subdomain = ''
  if (parts.length === 3 && parts[0] !== 'www') {
    subdomain = parts[0]
  }

  if (subdomain === '' || cleanHostname === 'softwarewow.co' || cleanHostname === 'www.softwarewow.co') {
    url.pathname = `/tenants/default${url.pathname}`
    return NextResponse.rewrite(url)
  }

  if (validTenants.includes(subdomain)) {
    url.pathname = `/tenants/${subdomain}${url.pathname}`
    return NextResponse.rewrite(url)
  }

  return new NextResponse('Not Found', { status: 404 })
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
