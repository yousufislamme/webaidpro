import { Roboto_Slab } from "next/font/google";
import Button from "./Button";
const inter = Roboto_Slab({ subsets: ['latin'] })
const Hero = () => {
   return (
      <main className=" h-screen">
        <section className={`${inter.className} flex justify-start bg-slate-400 px-5 items-center flex-col py-40`}>
        <div className="">
           <h1 className="capitalize text-4xl font-bold mb-5 w-full">Web Build app that <br /> get trending on appworld</h1>
           <p>WebAidPro is a leading software development company specializing in MERN stack development. We offer top-notch web development services to help businesses leverage the power of modern web technologies.</p>
            <div className="mt-5">
               <Button btnTitle="Button" className="mr-2" />
               <Button btnTitle="Button" className="bg-transparent"/>
            </div>
               
            </div>
        </section>
     
    </main>
  )
}

export default Hero;