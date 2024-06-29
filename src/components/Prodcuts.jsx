import React, { useState } from "react";
import Catagories from "./Catagories";


function Prodcuts() {
  const [data, setData] = useState(Catagories);

  const filterResult = (cartItem) => {
    const result = Catagories.filter((curData) => {
      return curData.category === cartItem;
    });
    setData(result); 
  };


  return (
    <>
      <h1 className="text-center text-info">Products Item</h1>

      <div className="container-fluid mx-2">
        <div className="row mt-5">
          <div className="col-md-3">
            <button className="btn btn-warning w-100 mb-4" onClick={()=> filterResult('Men')}>Men</button>
            <button className="btn btn-warning w-100 mb-4" onClick={()=> filterResult('Women')}>Women</button>
            <button className="btn btn-warning w-100 mb-4" onClick={()=> filterResult('Children')}>Child</button>
            <button className="btn btn-warning w-100 mb-4"onClick={()=> filterResult('Black')}>Black</button>
            <button className="btn btn-warning w-100 mb-4" onClick={()=> filterResult('White')}>White</button>
            <button className="btn btn-warning w-100 mb-4" onClick={()=>setData(Catagories)}>All</button>
          </div>
          <div className="col-md-9">
            <div className="row">
              {data.map((values)=>{
                const {id, price, title, image}=values
                return <>
                     <div  className="col-md-4 mb-4" key={id}>
                  <div className="card">
                    <img src={image} className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">{title}</h5>
                      <p>{price}</p>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="btn btn-dark">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
            
                
                </>
              })}
          
           
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Prodcuts;
