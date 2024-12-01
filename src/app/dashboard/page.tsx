'use client'
import { useEffect } from "react"

const Dashboard = () => {
  useEffect(() => {
    console.error("This is console error triggered from page.tsx")
  })
  return (
    <div>Dashboard page</div>
  )
}

export default Dashboard