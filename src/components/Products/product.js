import React, { useEffect, useState } from "react";
import Allproducts from "../Allproducts/Allproducts";
import axios from "axios";

function Product() {
  const [obj, setobj] =useState([]);

  // props
  
  async function FetchData(){
    const {data} = await axios.get('https://dummyjson.com/products'); // 20
    setobj(data.products  )
    console.log(  )
  }
  useEffect(()=>{
    FetchData()
  },[])

  // obj ==> 20 porducts

  function deleteCard(productId) {

    let newProducts = structuredClone(obj);
    newProducts =newProducts.filter((productDelete)=> productId != productDelete.id);

    setobj(newProducts)
  }

  return (
      <>
         <Allproducts data={obj} fun={deleteCard} />

         <div className="p-5 my-5 bg-danger w-100"></div>



      
      </>
  );
}

export default Product;
