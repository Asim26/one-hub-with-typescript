import {STORE_DATA,
       LIST_OF_PRODUCTS, 
       SINGLE_PRODUCT
} from '../actions/actiontypes';

  const initialState = {
    storeData: '',
    listOfProducts: [],
    singleProduct:"",
  };
  
  export default function myReducerOne(state = initialState, action:{type:string,payload:string}) {
    switch (action.type) {
      case STORE_DATA:
        return {
          ...state,
          storeData: action.payload,
        };

      case LIST_OF_PRODUCTS:
      return {
        ...state,
        listOfProducts: action.payload,
      };

      case SINGLE_PRODUCT:
      return {
        ...state,
        singleProduct: action.payload,
      };
    
      default:
        return state;
    }
  }
  