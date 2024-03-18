"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
const NavigationTestPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const q = searchParams.get("q")
  console.log(q)
  console.log(pathname)
  const handleClick = () => {
    console.log("clicked")
    //    router.push("/")
    //    router.replace("/")
    //    router.refresh(); // refreshes the current page
    //    router.back(); // goes back to previous page
    router.forward();
  }
  return (
    <div>
      <Link href="/" prefetch={false}>
        Click here
      </Link>
      <button onClick={handleClick}>Write and Redirect</button>
    </div>
  )
}

export default NavigationTestPage
