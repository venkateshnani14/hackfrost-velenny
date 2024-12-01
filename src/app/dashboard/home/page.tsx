'use client'
import { useEffect, useState } from "react";
import Loading from "./loading";

const Homepage = () => {
  const [posts,setPosts] = useState<any>()
  useEffect(() => {
    setTimeout(() => {
      console.log("HEllo guys")
      setPosts([
        {
          name: "venkatesh",
          followers: "1900",
          category: "general"
        },
        {
          name: "kohli",
          followers: "1800",
          category: "celeb"
        },
        {
          name: "jadeja",
          followers: "1700",
          category: "celeb"
        },
      ])
    },3000);
    
  },[])
  return (
    <div>
      <p>Homepage</p>
      {posts ? <div>
        {posts.map((post:any,index:number) => (
          <p key={index}>{post.name}</p>
        ))}
        </div> : <Loading />}
    </div>
  )
}

export default Homepage