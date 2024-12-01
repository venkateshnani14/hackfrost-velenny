'use client'
import { Button } from "@/components/ui/button"
import { UsersRound,User2Icon,LucideVideo } from 'lucide-react'
import { useRouter } from "next/navigation"
import {v4 as uuid} from 'uuid'
import { Input } from "@/components/ui/input"
import { useState } from "react"
import meetingStore from "../stores/meeting.store"

const page = () => {
    const router = useRouter();
    const {joiningLink,meetingName,setJoiningLink,setMeetingName} = meetingStore();
    const [isJoining, setIsJoining] = useState(false);
    const [isLoading,setIsLoading] = useState(false);
    const [joinLoading,setJoinLoading] = useState(false);
  return (
    <div className="bg-gradient-to-br from-sky-300 to-teal-300 h-[100vh] w-[100vw]">
        <div className="">
            <p className="text-black text-4xl font-extrabold p-2">Velenny</p>
        </div>
    <div className="flex flex-col justify-center items-center h-full w-full">
     <div className="bg-neutral-800 px-6 py-20 flex flex-col items-center gap-7 justify-around w-1/2 min-h-fit text-white rounded">
       <p className="text-3xl font-mono font-bold gradient-text">Create / Join a meeting</p>
       <div className="w-fit flex flex-col items-center">
       <div>
       <Button className="bg-primarycol hover:bg-teal-500 m-4 w-40" onClick={() => {
        setIsLoading(true);
         const id = uuid()
         router.push(`/meeting/${id}`)
        //  setIsLoading(false)
       }}>Create a meeting 
       {
        isLoading ?
        <div className="animate-spin">
       <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-slate-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
       </div> : <LucideVideo size={3} />
       }
       </Button>
       <Button className="bg-primarycol hover:bg-teal-500 m-4 w-40" onClick={() => setIsJoining(!isJoining)}>Join a meeting 
        <UsersRound size={3} />
       </Button>
       </div>
       {isJoining && 
        <div className="flex flex-col w-[90%] gap-2">
      <Input type="string" placeholder="Meeting name" value={meetingName} onChange={(e) => setMeetingName(e.target.value)} />
      <div className="flex space-x-1"><Input type="link" placeholder="Link" value={joiningLink} onChange={(e) => setJoiningLink(e.target.value)} />
      <Button type="submit" className="bg-primarycol hover:bg-teal-500" onClick={() => {
        setJoinLoading(true)
        if(meetingName.length > 3){
            router.push(`/meeting/${joiningLink}`)
        }
      }}>Join
      {
        joinLoading ?
        <div className="animate-spin">
       <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-slate-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
       </div> : <LucideVideo size={3} />
       }
      </Button></div>
    </div>
       }
       </div>
     </div>
    </div>
    </div>
  )
}

export default page