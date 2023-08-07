import React from 'react'

const Category = () => {
  return (
  
    <>
        <h1 class="flex py-5 lg:px-20 md:px-10 px-5 mt-5 font-bold text-xl text-gray-800">
            Categories
        </h1>

        <div class="bg-[#f3f3f3] py-5 xl:px-13 md:px-10  ">
            <button class="inline-flex items-center font-medium ml-5 px-6 py-2 bg-[#f8e5de] border-[#EF4444] border-2 text-[#EF4444]  rounded-full">
                Concerts
            </button>

            <button class="inline-flex items-center font-medium ml-5 px-6 py-2 bg-[#D7D8F3] border-[#595CDB] border-2 text-[#595CDB]  rounded-full">
                Travel
            </button>

            <button class="inline-flex items-center font-medium ml-5 px-6 py-2 bg-[#D1FAE5] border-[#047857] border-2 text-[#047857]  rounded-full">
                Staycation
            </button>

            <button class="inline-flex items-center font-medium ml-5 px-6 py-2 bg-[#D7D8F3] border-[#595CDB] border-2 text-[#595CDB]  rounded-full">
                Seminar
            </button>

            <button class="inline-flex items-center font-medium ml-5 px-6 py-2 bg-[#f8e5de] border-[#EF4444] border-2 text-[#EF4444]  rounded-full">
                Restaurant
            </button>

        </div>
    </>
  )
}

export default Category