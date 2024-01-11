import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Buyer() {
    const [buy,setBuy] = useState([]);
    useEffect(()=>{
        fetchData();
    },[]) 

    const fetchData = async () => {
        try{
            const result = await axios("http://localhost:8081/meds");
            setBuy(result.data);
        } catch(err) {
            console.log(err);
        }
    }
    return(
      <div>
        { buy.map((buy,i)=>(
          <div>
              
              <div className='news d-inline-block pl-2 px-5'>
               <div className="card1 col bg-dark text-light mb-3 ml-3 my-3 mx-3 px-6 py-6" style={{maxWidth:"345px"} }>
         <div className="card-body">
           <h4 className="card-title">Name: {buy.Name}</h4>
           <p className="card-text">Price: {buy.Price}</p>
           <p className="card-text">Manufacturer: {buy.Manufacturer_name}</p>
           <p className="card-text">Pack Size: {buy.Pack_size}</p>
           <p className="card-text">Contact: {buy.Email}</p>
  
         </div>
       </div>
       </div>
     
    
        </div>
      ))}
      </div>
    );
//   return (
//     <div>
//     <table className="table table-bordered">
//         <thead>
//             <tr>
//                 <th>Medicine name</th>
//                 <th>Price</th>
//                 <th>Seller</th>
//                 <th>Quantity</th>
//                 <th>Email</th>
//                 <th>Expiry</th>
//             </tr>
//         </thead>
//         <tbody>
//             {
//                 meds.map((meds,i)=>{
//                     return(
//                         <tr key={i}>
//                             <td>{meds.Name}</td>
//                             <td>{meds.Price}</td>
//                             <td>{meds.Seller}</td>
//                             <td>{meds.Pack_size}</td>
//                             <td>{meds.Email}</td>
//                             <td>{meds.Expiry_Date}</td>
//                         </tr>
//                     )
//                 })
//             }
//         </tbody>
//     </table>
//     </div>
//   );
}

export default Buyer;
