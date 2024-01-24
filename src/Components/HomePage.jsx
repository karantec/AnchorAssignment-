import { IoIosRocket } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
const HomePage = () => {
  return (
    <>
    <section className="bg-black h-screen  text-gray-600 body-font">
  <div className="container px-10 py-24 mx-auto">
    <div className="text-center mt-30">
    <div className=" flex text-base  leading-relaxed w-64 mx-auto space-x-3 border-2 py-2 border-gray-500/100  rounded-full  items-center justify-center">
    
         <p className="text-white font-bold text-2xl"><IoIosRocket/></p>
         <h1 className="text-white text-md">For Indian  Users Only</h1>
    </div>
      <h1 className="text-6xl mt-6 w-35 font-sans tracking-wide text-white font-bold mx-auto">Start posting Anonymously
      <br/> where no one will judge.</h1>
      <h1 className=" text-lg space-x-5 tracking-widest   xl:w-2/4 lg:w-3/4 mx-auto text-white mt-8">Welcome to Stranger discussion Forum.</h1>
    </div>
    
    <button className="flex mx-auto mt-16 text-lg text-white  text-center font-serif  bg-gray-900 border-0 py-2 px-8  rounded-full ">Create your Account
     <span className="pt-2 space-x-3 mb-2 item-center mx-5"> <FaArrowRight /></span></button>
    
    <p className="text-center mt-3 text-white">Already have account ? <span className="underline">Login</span></p>
  </div>
</section>

    </>
  )
}

export default HomePage