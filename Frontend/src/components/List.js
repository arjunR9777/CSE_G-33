import React, { useEffect, useState } from 'react';
import axios from 'axios';

function List() {
    const [meds,setMeds] = useState([]);
    useEffect(()=>{
        fetchData();
    },[]) 

    const fetchData = async () => {
        try{
            const result = await axios("http://localhost:8081/meds1");
            setMeds(result.data);
        } catch(err) {
            console.log(err);
        }
    }
  return (
    <div>
    <table className="table table-bordered">
        <thead>
            <tr>
                <th>Medicine name</th>
                <th>Price</th>
                <th>Seller</th>
                <th>Quantity</th>
                <th>Email</th>
                <th>Expiry</th>
            </tr>
        </thead>
        <tbody>
            {
                meds.map((meds,i)=>{
                    return(
                        <tr key={i}>
                            <td>{meds.Name}</td>
                            <td>{meds.Price}</td>
                            <td>{meds.Manufacturer_name}</td>
                            <td>{meds.Pack_size}</td>
                            <td>{meds.Email}</td>
                            <td>{meds.Expiry_Date}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
    </div>
  );
}

export default List;
