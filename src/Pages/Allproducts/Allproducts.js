import React from 'react'

function Allproducts({data , fun} ) {
  //Data


  return (
    <>
     <div className="d-flex align-content-center flex-wrap my-2 ">
      {data.map((product) => (
        <div className="card w-25 " key={product.id}>
          <div className="card-body">
            <img
              src={product.images[0]}
              width={100}
              height={100}
              className="my-5"
              alt="Product"
            />
            <h6 className="card-subtitle mb-2 text-body-secondary">
              {product.category}
            </h6>
            <p className="card-text">{product.title}</p>


            <button onClick={()=>fun(product.id)} className='btn btn-danger p-3 w-100'>Delete</button>
           
          </div>
        </div>
      ))}
    </div>
    
    </>
  )
}

export default Allproducts