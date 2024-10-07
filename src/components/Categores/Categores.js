import React, { useState } from 'react'

function Categores( {data}) {


    const [bgssssss, setBG] = useState("bg-white text-white p-2 card w-25");

    let  changeBG =( )=>{
        setBG("bg-black text-white p-2 card w-25")
     }
  return (
    <div className="d-flex align-content-center flex-wrap my-2  ">
    {data.map((product) => (
      <div className={bgssssss} key={product.id} >
        <div className="card-body">
          <img
            src={product.image}
            width={100}
            className="my-5"
            alt="Product"
          />
          <h6 className="card-subtitle mb-2 text-body-secondary">
            {product.category}
          </h6>
          <p className="card-text">{product.title}</p>

           <button onClick={changeBG}>Change Bg</button>
         
        </div>
      </div>
    ))}
  </div>
  )
}

export default Categores