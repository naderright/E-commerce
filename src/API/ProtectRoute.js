'use client'
import { Navigate } from "@/utilts/Navigate";
import { usePathname } from "next/navigation"
import { useSelector } from "react-redux";

function ProtectRoute({children}) {
    const route = usePathname();
    let slug ;
    if (route.split('/').length>2) {
         slug=Number(route.split('/')[2])
    }
    // console.log(route.split('/').length);
    
    const {user} = useSelector((state)=>state.auth)
   const accessRoute = ['/login','/register','/','/product',`/product/${slug}`]
    if (!user.email) {
        if (accessRoute.includes(route)) {
            return children
        }
        Navigate(window.location.origin,'/login')
    }

  return (
    children
  )
}

export default ProtectRoute
