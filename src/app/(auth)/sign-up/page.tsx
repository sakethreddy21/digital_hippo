"use client"

import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"
import { Icons } from "@/src/components/Icons"
import { Button, buttonVariants } from "@/src/components/ui/button"
import { cn } from "@/src/lib/utils"
import { ArrowRight } from "lucide-react"
import Link from "next/link"



const page = () => {
  return (
    <>
    <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col items-center space-y-2 text-center">
          <Icons.logo className='h-20 w-20'/>
          <h1 className="text-2xl font-bold">Create an Account</h1>
          <Link href="/sign-in" className={buttonVariants({
            variant:'link',
            className:'gap-1.5'
          })}>Already have an account? Sign in
          <ArrowRight className="h-4 w-4 ml-0.5"/></Link>
        </div>
        <div className="grid gap-6">
            <form>
              <div className="grid gap-2">
                <div className="grid gap-1 py-2">
                  <Label htmlFor="email">Email</Label>
                  <Input className={cn({
                    "focus-visible:ring--red-500":true
                  })}
                  placeholder="you@example.com"/>
                </div>
                <div className="grid gap-1 py-2">
                  <Label htmlFor="password">Password</Label>
                  <Input className={cn({
                    "focus-visible:ring--red-500":true
                  })}
                  placeholder="Password"/>
                </div>
                <Button>Sign-up</Button>
              </div>
            </form>
        </div>
      </div>
      </div>
      </>
  )
}

export default page