import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const AccountCreated = () => {
  return (
    <div>
    <h1>Name</h1>
    <section className="bg-black dark:bg-gray-900">
<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
 
  <div className="w-full  bg-gray-900  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
  <p className=" flex items-center text-2xl   mt-8  px-8 justify-center text-white"><FaArrowAltCircleRight/></p>
  <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        
          <h1 className="text-xl  mb-10 text-center  font-sans font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
              Account Created<br/> Successfully
          </h1>
              <button className="flex mx-auto mt-16 text-lg text-white justify-center tracking-widest text-center font-serif  bg-gray-900 border-2    py-2 px-8  rounded-full ">Create Your First Spot
            <span className="pt-2 space-x-3 mb-2 item-center mx-5"> <FaArrowRight /></span></button>
      </div>
  </div>
</div>
</section>
</div>
      
  )
}

export default AccountCreated