
import React, { useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import { CreateContainer, Header, MainContainer } from './components';
import { AnimatePresence } from 'framer-motion';
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";

import VendorInfo from "./components/VendorInfo";
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import LineChart from "./components/LineChart";


function App() {

	const [{ foodItems }, dispatch] = useStateValue(); // fooditems is destructured from intialstate

	const fetchData = async () => {
	  await getAllFoodItems().then((data) => {
		dispatch({
			type: actionType.SET_FOOD_ITEMS,
			foodItems: data,
		});
	  });
	};
  
	useEffect(() => {
	  	fetchData();
	}, []);


	return (
		// AnimatePresence as wrapper
		<AnimatePresence mode='wait'> {/*exitBeforeEnter is now depricated replace with mode removes unwanted animation pollution*/}
			<div className="w-screen h-auto flex flex-col bg-primary">
				<Header />

				<main className='mt-14 md:mt-20 px-4 md:px-16 py-4 w-full'>
					<Routes>
						<Route path='/*' element={<MainContainer />} />  
						<Route path='/createItem' element={<CreateContainer />} /> {/*create route*/}
						<Route path='/vendorInfo' element={<VendorInfo />} /> {/*Vendor Info route*/}
						<Route path='/linechart' element={<LineChart />} />
					</Routes>
				</main>
				{/* <Category /> */}
				

				<Newsletter /> 
				<Footer /> 
			</div>  
		</AnimatePresence>
	
	);
}

export default App;
