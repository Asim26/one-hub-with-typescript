import { STORE_DATA, 
        LIST_OF_PRODUCTS, 
        SINGLE_PRODUCT 
} from "./actiontypes";
  
  export function storeData(data:[]) {
    return {
      type: STORE_DATA,
      payload: data,
    };
  }

  export function listOfProducts(data:[]) {
    return {
      type: LIST_OF_PRODUCTS,
      payload: data,
    };
  }

  export function singleProduct(data:[]) {
    return {
      type: SINGLE_PRODUCT,
      payload: data,
    };
  }