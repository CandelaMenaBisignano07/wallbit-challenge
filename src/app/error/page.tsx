"use client"

import { useContext } from "react"
import { ErrorContext, ErrorContextType } from "../context/ErrorContext"
import Link from "next/link"
import { redirect } from 'next/navigation'
export default function ErrorPage() {
  const errorContext= useContext(ErrorContext) as ErrorContextType
  if(!errorContext.error) redirect('/')
  return (
    <div>
      <h1>{errorContext.error}</h1>
      <Link href={'/'}>volver</Link>
    </div>
  )
}