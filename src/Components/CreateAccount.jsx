import { IoIosRocket } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
const CreateAccount = () => {
  return (
    <div>
        <section className="bg-black dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
     
      <div className="w-full  bg-gray-900  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <p className=" flex items-center text-2xl   mt-8  px-8 justify-center text-white"><IoIosRocket/></p>
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            
            
              <h1 className="text-xl   text-center  font-sans font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
                  Create Your Account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <input type="text" className="bg-black border py-4 rounded-full border-white text-gray-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Name" required=""/>
                  </div>
                  <div>
                      
                      <input type="email" name="password" id="password" className="bg-black border py-4 rounded-full border-gray-300 text-gray-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter your Email ID" required=""/>
                  </div>
                  <button className="flex mx-auto mt-16 text-lg text-white justify-center tracking-widest text-center font-serif  bg-gray-900 border-2    py-2 px-8  rounded-full ">Continue
     <span className="pt-2 space-x-3 mb-2 item-center mx-5"> <FaArrowRight /></span></button>
                    
              </form>
          </div>
      </div>
  </div>
</section>
    </div>
  )
}

export default CreateAccount