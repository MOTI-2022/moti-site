import React, { useState } from "react";
import { Transition } from "@headlessui/react";

function Card() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
    
     <main class="px-16 py-3 mt-0  lg:px-4 md:col-span-2 bg-blue-100 w-100">

    <header class="mt-2 mb-2 h-15">
    <h2 class="text-gray-700 text-4xl font-semibold leading-none tracking-wider flex justify-center">Resources</h2>
    <h3 class="text-xl font-semibold tracking-wider flex justify-center mb-0">For Residents</h3>
    </header>

    <section>
  
    <div class="relative items-center w-auto py-11 mt-4 mx-5 md:px-3 lg:px-16 max-w-9xl bg-gray-100">
        <div class="grid grid-cols-1 gap-6 mx-auto lg:grid-cols-3 ">
      
             
          <div class="p-8 bg-gray-300">
              <h2 class="mb-8 text-lg font-semibold tracking-widest text-blue-600 uppercase">Broadband Connection</h2>
              <h1 class="mx-auto mb-auto text-md font-semibold leading-none tracking-tighter text-neutral-600 lg:text-lg">Rent a hotspot, find public Wi-Fi, find a low-cost internet plan or upgrade your current internet plan.</h1>

              <div class="mt-4">
                  <a href="#" class="bg-indigo-200 inline-flex items-center mt-4 font-semibold  text-black lg:mb-0 hover:text-neutral-600 inline-block hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300" title="read more"> Enter » </a>
              </div>
          </div>
          <div class="p-6  bg-gray-300">
                    <h2 class="mb-8 text-lg font-semibold tracking-widest text-blue-600 uppercase">Public Library Services</h2>
                    <h1 class="mx-auto mb-auto text-md font-semibold leading-none tracking-tighter text-neutral-600 lg:text-lg">Find the closest library for in-person assistance.</h1>
    
                    <div class="mt-4">
                        <a href="https://storelocator.site/LDAAwP" target="_blank" allow="geolocation" class="text-black bg-indigo-200 inline-flex items-center mt-4 font-semibold  lg:mb-0 hover:text-neutral-600 inline-block hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300" title="read more"> Find a library » </a>
                    </div>
           </div>
           <div class="p-6  bg-gray-300">
                <h2 class="mb-8 text-lg font-semibold tracking-widest text-blue-600 uppercase">Find a Digital Navigator</h2>
                <h1 class="mx-auto mb-auto text-md font-semibold leading-none tracking-tighter text-neutral-600 lg:text-lg">Find trained individuals around your community for various digital support.</h1>

                <div class="mt-4">
                    <a href="#" class="bg-indigo-200 inline-flex items-center mt-4 font-semibold text-black lg:mb-0 hover:text-neutral-600 inline-block hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300" title="read more"> Enter » </a>
                </div>
            </div>
            <div class="p-6  bg-gray-300">
             {/* <img class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="/assets/images/placeholders/squareCard.png" alt="blog"/>*/}
                <h2 class="mb-8 text-lg font-semibold tracking-widest text-blue-600 uppercase">Digital Skills Training</h2>
                <h1 class="mx-auto mb-auto text-md font-semibold leading-none tracking-tighter text-neutral-600 lg:text-lg">Explore overarching training courses covering fundamental digital knowledge that help you better navigate your ditigal life.</h1>

                <div class="mt-4">
                    <a href="#" class="bg-indigo-200 inline-flex items-center mt-4 font-semibold text-black lg:mb-0 hover:text-neutral-600 inline-block hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300" title="read more"> Enter » </a>
                </div>
            </div>
            <div class="p-6 bg-gray-300">
                <h2 class="mb-8 text-lg font-semibold tracking-widest text-blue-600 uppercase">Self Tech Services</h2>
                <h1 class="mx-auto mb-auto text-md font-semibold leading-none tracking-tighter text-neutral-600 lg:text-lg">Learn how to connect and fix your SJ Access hotspot device through videos and other resources.</h1>

                <div class="mt-4">
                    <a href="#" class="bg-indigo-200 inline-flex items-center mt-4 font-semibold text-black lg:mb-0 hover:text-neutral-600 inline-block hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300" title="read more"> Enter » </a>
                </div>
            </div>
            <div class="p-6 bg-gray-300">
              <h2 class="mb-8 text-lg font-semibold tracking-widest text-blue-600 uppercase">OR: </h2>
              <h1 class="mx-auto mb-auto text-md font-semibold leading-none tracking-tighter text-neutral-600 lg:text-lg">Take our short quiz to help us help you!</h1>
              <div class="mt-4">
                  <div class="btn bg-indigo-300 text-black inline-block hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">Click here</div>
              </div>
          </div> 

           

        </div>
    </div>
  </section>
    </main> 

    </div>
  );
}

export default Card;
