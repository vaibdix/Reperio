import React from "react";

const Card = ({ flag, data, scrollValue }) => {
  console.log(data);

  return (
    <div
        ref={Card}
        className={`w-full flex items-center gap-3  my-12 scroll-smooth  ${
        flag
            ? "overflow-x-scroll scrollbar-none "
            : "overflow-x-hidden flex-wrap"
        }`}
    >
        <div className="w-full flex items-center justify-between">
				<p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
					test
				</p>
        </div>
        <h1 class="flex py-5 lg:px-20 md:px-10 px-5 mt-5 font-bold text-xl text-gray-80 mb-5">
            Trending Locations
        </h1>
        {data && data.map((item) => (
            <div class="flex flex-col bg-[#f3f3f3] m-auto p-auto">
            <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
                <div class="flex flex-nowrap lg:ml-27 md:ml-20 ml-10">
                <div class="inline-block px-3">
                    <div class="w-64 h-64 max-w-xs overflow-hidden rounded-2xl shadow-md bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                    <img src={item?.imageURL} width="object-cover" alt="Dj" />
                    </div>

                    <h3 className="ml-1 mt-4 mb-2 font-medium">{item?.title}</h3>
                    <h3 className=" ml-1 font-medium">{item?.price}</h3>
                </div>
                {/* <div class="inline-block px-3">
                        <div class="w-64 h-64 max-w-xs overflow-hidden rounded-2xl shadow-md bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                            <img src='https://imgmediagumlet.lbb.in/media/2019/06/5d106d1d4876351e7076933e_1561357597039.jpg?fm=webp&w=750&h=500&dpr=2' width='cover' alt='restaurant' />
                        </div>

                        <h3 className='ml-1 mt-4 mb-2 font-medium'>WoodlandSide</h3>
                        <h3 className=' ml-1 font-medium'>₹ 7000 For Today</h3>

                    </div>
                    <div class="inline-block px-3">
                        <div class="w-64 h-64 max-w-xs overflow-hidden rounded-2xl shadow-md bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                            <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdynamic-media-cdn.tripadvisor.com%2Fmedia%2Fphoto-o%2F07%2Ff5%2F50%2Fd8%2Froyal-alhambra-palace.jpg%3Fw%3D900%26h%3D-1%26s%3D1&f=1&nofb=1&ipt=0813522d3e148ac491ace60409d976ec76ea9424d994b5f8094de6db0f183a43&ipo=images' width='cover' alt='Hotel' />
                        </div>

                        <h3 className='ml-1 mt-4 mb-2 font-medium'>Hotel Ritz</h3>
                        <h3 className=' ml-1 font-medium'>₹ 1500 For Today</h3>

                    </div>
                    <div class="inline-block px-3">
                        <div class="w-64 h-64 max-w-xs overflow-hidden rounded-2xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <img src='https://i.pinimg.com/736x/96/97/f0/9697f055ffc504de107267b88744b0b6.jpg' width='cover' alt='Staycation' />
                        </div>

                        <h3 className='ml-1 mt-4 mb-2 font-medium'>Bali</h3>
                        <h3 className=' ml-1 font-medium'>₹ 15000 Onwards</h3>

                    </div>
                    <div class="inline-block px-3">
                        <div class="w-64 h-64 max-w-xs overflow-hidden rounded-2xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Foffersinme.com%2Fimages%2Fleaflet%2F2021%2F03%2F21%2F14803%2F14803-0-lulu-flat-30-off-discount.jpg&f=1&nofb=1&ipt=d848838d5b7d587fe8545fa7f3d5c603f16093abeeebc5fdaa0c0492988562a1&ipo=images' width='cover' alt='offers' />
                        </div>

                        <h3 className='ml-1 mt-4 mb-2 font-medium'>WoodlandSide</h3>
                        <h3 className=' ml-1 font-medium'>₹ 7000 For Today</h3>
                        

                    </div>
                        <div class="inline-block px-3">
                            <div class="w-64 h-64 max-w-xs overflow-hidden rounded-2xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmir-s3-cdn-cf.behance.net%2Fproject_modules%2Fdisp%2Fffebff21093101.562fb5a08c910.jpg&f=1&nofb=1&ipt=7bbc9099d7e3b19db602a809487d4c6bcb50a6a0baf1eb3c6bd624f5619fca14&ipo=images' alt='store'/>
                        </div>

                        <h3 className='ml-1 mt-4 mb-2 font-medium'>New Store</h3>
                        <h3 className=' ml-1 font-medium'>.</h3>
                            
                        </div>
                        <div class="inline-block px-3">
                            <div class="w-64 h-64 max-w-xs overflow-hidden rounded-2xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                <img src='https://logodix.com/logo/1810579.png' alt='talk'/>
                            </div>

                        <h3 className='ml-1 mt-4 mb-2 font-medium'>TedX</h3>
                        <h3 className=' ml-1 font-medium'>.</h3>

                        </div>
                        <div class="inline-block px-3">
                            <div class="w-64 h-64 max-w-xs overflow-hidden rounded-2xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            
                            <img src='https://c.pxhere.com/photos/62/43/stage_theatre_of_santa_isabel-694928.jpg!d' alt='conference'/>
                            </div>

                        <h3 className='ml-1 mt-4 mb-2 font-medium'>Live Conference</h3>
                        <h3 className=' ml-1 font-medium'>.</h3>
                        </div> */}
                </div>
            </div>
            </div>
        ))}

        <style>
        {/* .hide-scroll-bar {
        -ms-overflow-style: none;
        scrollbar-width: none;
        }
        .hide-scroll-bar::-webkit-scrollbar {
        display: none;
        } */}
        </style>
    </div>
  );
};

export default Card;
