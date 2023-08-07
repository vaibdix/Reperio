import {
    collection,
    doc,
    getDocs,
    orderBy,
    query,
    setDoc,
  } from "firebase/firestore";
  import { firestore } from "../firebase.config";
  
  // Saving new Item
  export const saveItem = async (data) => {
    // setDoc comes from firebase and helps us to set new value if value is not here it will crete it if its already there it will update it
    // doc() -- this method helps us to create new document in the firestore database
    // fooditems/"events" is a collection name in doc and if its not here it will add new to if or will crete will the name fooditem
    await setDoc(doc(firestore, "foodItems", `${Date.now()}`), data, { 
      merge: true, // merege used for future to add new fields
    });
  };

  // when chnaging foodItems here change it in initialstate.js, reducer.js, App.js, createcontainer.js also for data availibility
  
  // getall food items
  // below is a qery to firestore db in which we are accessing collection with name foodItems and getting it in decending roder ie last added comes first and then mapping through the data
  export const getAllFoodItems = async () => {
    const items = await getDocs(
      query(collection(firestore, "foodItems"), orderBy("id", "desc"))
    );
  
    return items.docs.map((doc) => doc.data());
  };
  

