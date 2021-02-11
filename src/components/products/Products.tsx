import React,{Dispatch, useEffect} from 'react';
import {connect} from "react-redux";
import { listProductRequest } from "../../services/dataService";
import { NETWORK_ERROR } from "../../utilities/constants";
import { listOfProducts, singleProduct } from "../../redux/actions/action";

function Products(props:any) {

  useEffect(() => {
    async function fetchMyProducts() {
      const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InN0YXR1cyI6IkFjdGl2ZSIsIl9pZCI6IjVmMmVmOTZkNWEwOWM1MzUyY2E1NmNkMSIsImVtYWlsIjoiYWRtaW5AeWFob28uY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkY1BaSkxoc3dLSndiaHF5aWJ6TGIwZTh6S05mVFFpcHdieE55L1Uyd25rS3ZIOHhnallsZUMiLCJyb2xlIjoiU3VwZXJBZG1pbiIsImFkZGVkX2RhdGUiOiIyMDIwLTA4LTA4VDE5OjEzOjQ5LjMyNVoiLCJfX3YiOjB9LCJpYXQiOjE2MTE3NTM3NTcsImF1ZCI6ImFkbWluIiwiaXNzIjoibm9kZV9iYWNrZW5kIiwic3ViIjoiYWRtaW5AeWFob28uY29tIn0.Al0uRnNcrAK8GZumRVbMgS1O8buvmZL2mGmnSueyIWSyi4MX0HaRe9oFH9jLLSzDdSR1cAz-NZxdydAHKRYTLg";

      const productResponse = await listProductRequest(token);

      if (productResponse === NETWORK_ERROR) {
        alert(NETWORK_ERROR);
      } else {
        props.listOfProductsHandler(productResponse.data.payload.data);
      }
    }

    fetchMyProducts()
  }, [])

  return (
    <div>
      <h2>Hello ! products</h2>

          {
            props.ListProducts.map(function(item:any, i:any){
              return <li key={i}>{item._id} {item.description} {item.brand} {item.price}</li>
            })
          }

    </div>
  );
}

// export default Products;
const mapStateToProps = (state:any) => {
  return {
    ListProducts: state.myReducerOne.listOfProducts,
  };
};
const mapDispatchToProps = (dispatch:any) => {
  return {
    listOfProductsHandler: (ProductsList:[]) => dispatch(listOfProducts(ProductsList)),
    singleProduct: (productData:[]) => dispatch(singleProduct(productData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);