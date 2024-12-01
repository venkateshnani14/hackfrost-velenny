'use client'
import Carousel_custom from "@/custom_components/Carousel_custom";
import { MoveRight } from "lucide-react";
import { GoogleLogin  } from '@react-oauth/google'
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  return (
    <div className="bg-gradient-to-br from-sky-300 to-teal-300 h-[100vh] w-[100vw] overflow-hidden">
      <div>
      <p id="logo" className="text-black text-4xl font-extrabold p-4">Velenny</p>
      </div>
      <div className="mx-2 px-2 flex justify-center items-center h-[100vh] w-full relative">
      <Carousel_custom />
      <div className="absolute w-1/4">
      <span className="font-bold text-4xl text-gray-700">Schedule your meetings with just a click</span>
      <div className="text-gray-50 flex gap-2 my-4">
        <p className="text-2xl underline text-gray-600 hover:cursor-pointer">Login to continue</p>
        <MoveRight size={40} className="text-gray-600 hover:cursor-pointer"/>
      </div>
      
<GoogleLogin
  onSuccess={credentialResponse => {
  router.push('/meeting')
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>;

      </div>
      </div>
    </div>
  );
}
