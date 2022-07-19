import React, { useState } from "react";
import { Transition } from "@headlessui/react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
    
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img src= "https://lh6.googleusercontent.com/ImlZeWcXiGyddmhGXQfkE74poqTWqWfTpM12ozj2jSexX2Az4Dy6L21hZ7Ct8t3K7-HyPypcRTlECRsLSUxUH5TKqox_ijrRqtOM5GXm-uVXN4gG7MG4U0sYqIOev6PucRO52Hpp" className="h-full w-1/3" alt="Workflow"/>
              </div>
             {/* <div>
              <a href="#" class="flex justify-start py-30 px-2 mr-40 margin right-auto">
                <img src="../img/logo.jpg" alt="Logoooo" class="h-full w-1/4"/>
              </a>
              </div>*/}
              
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a href="#" className=" hover:bg-gray-700 text-black px-3 py-2 rounded-md text-sm font-medium">
                    Dashboard
                  </a>

                  <a href="#"
                    className="text-gray-300 hover:bg-gray-700 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Team
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Projects
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Calendar
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Reports
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>



          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Dashboard
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Team
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Calendar
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Reports
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    
        {/* <main class="px-16 py-6 mt-3 md:col-span-2 bg-blue-100">

    <header class="mt-3 ">
    <h2 class="text-gray-700 text-4xl font-semibold leading-none tracking-wider flex justify-center">Resources</h2>
    <h3 class="text-xl font-semibold tracking-wider flex justify-center mb-6">For Residents</h3>
    </header>

    <section>
  
  <div class="relative items-center w-full px-5 py-11 mx-auto md:px-12 lg:px-24 max-w-7xl bg-gray-100">
      <div class="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
      
             
          <div class="p-6">
              <h2 class="mb-8 text-lg font-semibold tracking-widest text-blue-600 uppercase">Broadband Connection</h2>
              <h1 class="mx-auto mb-auto text-md font-semibold leading-none tracking-tighter text-neutral-600 lg:text-lg">Rent a hotspot, find public Wi-Fi, find a low-cost internet plan or upgrade your current internet plan.</h1>

              <div class="mt-4">
                  <a href="#" class="bg-indigo-200 inline-flex items-center mt-4 font-semibold  text-black lg:mb-0 hover:text-neutral-600 inline-block hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300" title="read more"> Enter » </a>
              </div>
          </div>
          <div class="p-6">
                    <h2 class="mb-8 text-lg font-semibold tracking-widest text-blue-600 uppercase">Public Library Services</h2>
                    <h1 class="mx-auto mb-auto text-md font-semibold leading-none tracking-tighter text-neutral-600 lg:text-lg">Find the closest library for in-person assistance.</h1>
    
                    <div class="mt-4">
                        <a href="https://storelocator.site/LDAAwP" target="_blank" allow="geolocation" class="text-black bg-indigo-200 inline-flex items-center mt-4 font-semibold  lg:mb-0 hover:text-neutral-600 inline-block hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300" title="read more"> Find a library » </a>
                    </div>
           </div>
           <div class="p-6">
                <h2 class="mb-8 text-lg font-semibold tracking-widest text-blue-600 uppercase">Find a Digital Navigator</h2>
                <h1 class="mx-auto mb-auto text-md font-semibold leading-none tracking-tighter text-neutral-600 lg:text-lg">Find trained individuals around your community for various digital support.</h1>

                <div class="mt-4">
                    <a href="#" class="bg-indigo-200 inline-flex items-center mt-4 font-semibold text-black lg:mb-0 hover:text-neutral-600 inline-block hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300" title="read more"> Enter » </a>
                </div>
            </div>
            <div class="p-6">
              <img class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="/assets/images/placeholders/squareCard.png" alt="blog"/>
                <h2 class="mb-8 text-lg font-semibold tracking-widest text-blue-600 uppercase">Digital Skills Training</h2>
                <h1 class="mx-auto mb-auto text-md font-semibold leading-none tracking-tighter text-neutral-600 lg:text-lg">Explore overarching training courses covering fundamental digital knowledge that help you better navigate your ditigal life.</h1>

                <div class="mt-4">
                    <a href="#" class="bg-indigo-200 inline-flex items-center mt-4 font-semibold text-black lg:mb-0 hover:text-neutral-600 inline-block hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300" title="read more"> Enter » </a>
                </div>
            </div>
            <div class="p-6">
                <h2 class="mb-8 text-lg font-semibold tracking-widest text-blue-600 uppercase">Self Tech Services</h2>
                <h1 class="mx-auto mb-auto text-md font-semibold leading-none tracking-tighter text-neutral-600 lg:text-lg">Learn how to connect and fix your SJ Access hotspot device through videos and other resources.</h1>

                <div class="mt-4">
                    <a href="#" class="bg-indigo-200 inline-flex items-center mt-4 font-semibold text-black lg:mb-0 hover:text-neutral-600 inline-block hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300" title="read more"> Enter » </a>
                </div>
            </div>
            <div class="p-6">
              <h2 class="mb-8 text-lg font-semibold tracking-widest text-blue-600 uppercase">OR: </h2>
              <h1 class="mx-auto mb-auto text-md font-semibold leading-none tracking-tighter text-neutral-600 lg:text-lg">Take our short quiz to help us help you!</h1>
              <div class="mt-4">
                  <div class="btn bg-indigo-300 text-black inline-block hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">Click here</div>
              </div>
          </div> 

           

      </div>
  </div>
  </section>
    </main> */}

    </div>
  );
}

export default Nav;
