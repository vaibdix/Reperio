import React from "react";
// import { MdMessage } from "react-icons/md"

const Newsletter = () => {
  return (
    <div>
      <div class="container my-24 px-6 mx-auto">
      {/*  */}
        <section class="mb-32 text-gray-800 text-center mt-5 rounded-2xl bg-[url('../public/nl.png')] bg-cover bg-blend-darken">
          <div class="flex flex-wrap justify-center">
            <div class="grow-0 shrink-0 flex-basis w-full lg:w-6/12 px-3">
              {/* <div class="p-4 bg-orange-500 rounded-full shadow-lg inline-block mb-6">
                <MdMessage className="text-white"/>
              </div> */}

              <h2 class="text-3xl font-bold mb-6 mt-10 text-purple-900">
                Subscribe for more information and update from Reperio
                
              </h2>

              <p class="text-purple-600 mb-12 ">
                We will write rarely and only high-quality content.
              </p>
            <form action="https://formsubmit.co/vaibhavvgd@gmail.com" method="POST">
              <div class="md:flex flex-row mb-10">
                <input
                  type="text"
                  class="form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 font-normal text-gray-700 bg-[#f3f3f3] bg-clip-padding hover:shadow-lg rounded-full transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none border-2 border-purple-600"
                  placeholder="Enter your email"
                  name="email" 
                  required
                  
                />
                <button
                  type="submit"
                  class="inline-block px-7 py-3 bg-blue-600 text-purple-600 font-medium  leading-snug uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out border-2 border-purple-600"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Subscribe
                </button>
              </div>
            </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Newsletter;
