import { NextResponse } from 'next/server'
import { useSelector } from 'react-redux'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const {user} = useSelector((state)=>state.auth)
    if (!user.email) {
        return NextResponse.redirect(new URL('/login', request.url))

    }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/cart','/checkout','/profile','/order_details']
}