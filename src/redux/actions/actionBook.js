import { addDoc, collection, getDocs } from "firebase/firestore";
import { dataBase } from "../../firebase/firebaseConfig";
import { bookingTypes } from "../types/typesBook";

const collectionOne = "campusone";
const collectionTwo = "campustwo";

export const actionGetCampusOneAsync = () => {
  return async (dispatch) => {
    const bookingCollection = collection(dataBase, collectionOne);
    const querySnapshot = await getDocs(bookingCollection);
    const bookingOne = [];
    try {
      querySnapshot.forEach((doc) => {
        bookingOne.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      console.log(bookingOne);
    //   sessionStorage.setItem("citas", JSON.stringify(cita));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(actionGetCampusOneSync(bookingOne));
    }
  };
};

const actionGetCampusOneSync = (bookingOne) => {
  return {
    type: bookingTypes. GET_BOOKING_ONE,
    payload: {
      bookingOne: bookingOne,
    },
  };
};

export const actionAddCampusOneAsync = (bookingOne) => {
  return async (dispatch) => {
    try {
      const bookingCollection = collection(dataBase, collectionOne);
      const docs = await addDoc(bookingCollection, bookingOne);
      dispatch(actionAddCampusOneSync({ id: docs.id, ...bookingOne }));
    } catch (error) {
      console.log(error);
      dispatch(actionAddCampusOneSync({}));
    }
  };
};

const actionAddCampusOneSync = (bookingOne) => {
  return {
    type: bookingTypes.ADD_BOOKING_ONE,
    payload: bookingOne,
  };
};