import React, { useEffect, useRef, useState } from "react";
import { MdShoppingBasket,MdShoppingCart } from "react-icons/md";
import { motion } from "framer-motion";
import NotFound from "../img/NotFound.svg";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import Newsletter from "./Newsletter";

const RowContainer = ({ flag, data, scrollValue }) => {
const rowContainer = useRef();

const [items, setItems] = useState([]);

const [{ cartItems }, dispatch] = useStateValue();

const addtocart = () => {
	dispatch({
	type: actionType.SET_CARTITEMS,
	cartItems: items,
	});
	localStorage.setItem("cartItems", JSON.stringify(items));
};

useEffect(() => {
	rowContainer.current.scrollLeft += scrollValue;
}, [scrollValue]);

useEffect(() => {	// whenever the state change we call addtocart() which dispatches items adn stringifyies it in local storage to udpate cart data no value
	addtocart();
}, [items]);

return (
  <div
    ref={rowContainer}
    className={`w-full flex items-center gap-4 my-12 scroll-smooth ${
		flag
			? "overflow-x-scroll scrollbar-none"
			: "overflow-x-hidden flex-wrap justify-center"
    }`}
  >
    {data && data.length > 0 ? (
      data.map((item) => (
        // <div
        // 	key={item?.id}
        // 	// h-[175px]
        // 	className="w-275 h-auto min-w-[275px] md:w-300 md:min-w-[300px] bg-cardOverlay rounded-lg py-4 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
        // >
        // 	<div className="w-full flex items-center justify-between">
        // 	<motion.div
        // 		className="w-40 h-40 -mt-8 drop-shadow-2xl"
        // 		whileHover={{ scale: 1.2 }}
        // 	>
        // 		<img
        // 			src={item?.imageURL}
        // 			alt=""
        // 			className="w-full h-full object-contain"
        // 		/>
        // 	</motion.div>
        // 	<motion.div
        // 		whileTap={{ scale: 0.75 }}
        // 		className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"
        // 		onClick={() => setItems([...cartItems, item])}
        // 	>
        // 		<MdShoppingBasket className="text-white" />
        // 	</motion.div>
        // 	</div>

        // 	<div className="w-full flex flex-col items-end justify-end -mt-8 ">
        // 		<p className="text-textColor font-semibold text-base md:text-lg">
        // 			{item?.title}
        // 		</p>
        // 		<p className="mt-1 text-sm text-gray-500">
        // 			{item?.calories}
        // 		</p>
        // 		<p className="mt-1 text-sm text-gray-500">
        // 			{item?.offer}
        // 		</p>
        // 		<div className="flex items-center gap-8">
        // 			<p className="text-lg text-headingColor font-semibold">
        // 				<span className="text-sm text-red-500 font-bold">₹</span>{" "}
        // 				{item?.price}
        // 			</p>
        // 		</div>
        // 	</div>
        // </div>


		
		<div key={item?.id}>
			<div class="relative m-1 grid w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
			<a
				class="relative flex h-60 overflow-hidden rounded-t-lg"
				href="#"
			>
				<img
					src={item?.imageURL}
					alt=""
					className="w-full h-full object-cover "
				/>
				
				<span class="absolute top-0 left-0 py-1 px-4 rounded-md bg-orange-400 text-center text-sm text-white">
				{item?.offer}
				</span>
			</a>
			<div class="mt-4 px-5">
				<a href="#">
				<h5 class="text-lg tracking-tight text-slate-900">
					{item?.title}
				</h5>
				</a>
				<p>
				<span class="text-sm text-slate-900 ">{item?.date}</span>
				</p>
				<div class="mt-2 mb-5 flex items-center justify-between">
				<p>
					<span class="text-xl font-bold text-slate-900 mr-10">
					₹{item?.price}
					</span>
				</p>
				<div class="flex items-end whitespace-nowrap">
					{/* <svg
					aria-hidden="true"
					class="h-5 w-5 text-yellow-300"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					>
					<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
					<svg
					aria-hidden="true"
					class="h-5 w-5 text-yellow-300"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					>
					<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
					<svg
					aria-hidden="true"
					class="h-5 w-5 text-yellow-300"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					>
					<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
					<svg
					aria-hidden="true"
					class="h-5 w-5 text-yellow-300"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					>
					<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
					<svg
					aria-hidden="true"
					class="h-5 w-5 text-yellow-300"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					>
					<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
					<span class="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
					5.0
					</span> */}
				{/* <button
					class="flex items-center justify-center rounded-lg bg-primary border-[#222222] border-spacing-1 hover:bg-orange-500 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
					
				>
				
				</button> */}


				<button 
					class="flex items-center justify-center text-orange-500 border border-orange-500  hover:bg-orange-500  hover:text-white active:bg-orange-500  px-2 py-1 rounded outline-none focus:outline-none  ease-linear transition-all duration-150" 
					type="button"
					onClick={() => setItems([...cartItems, item])}
     			>
				<MdShoppingCart />
					<span class="ml-2">Add to cart</span>
				</button>


				</div>
				</div>
				{/* <button
					class="flex items-center justify-center rounded-lg bg-orange-400 hover:bg-orange-500 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
					onClick={() => setItems([...cartItems, item])}
				>
				<MdShoppingCart />
					<span class="ml-2">Add to cart</span>
				</button> */}
			</div>
			</div>
		</div>
		









		






      ))
    ) : (
		<div className="w-full flex flex-col items-center justify-center">
			<img src={NotFound} className="h-340" />
			<p className="text-xl text-headingColor font-semibold my-2">
			Items Not Available
			</p>
		</div>
    )}
    {/* <Newsletter /> */}
  </div>
);
};

export default RowContainer;
