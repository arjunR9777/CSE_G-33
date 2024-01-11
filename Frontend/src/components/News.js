import React  from 'react';
import logo from "./logo.png";
import news from "./news.jpg";
import Footer from './Footer';
import Header from "./Header";
import { useEffect,useState } from 'react';
//,{useState}

export default function News(){
    let [value,setValue]=useState("");
    async function ak()
    {
        let response=await fetch("https://newsapi.org/v2/top-headlines?country=in&category=health&pageSize=10&page=2&apiKey=c90e572c41f148d983074a3ea36d447b");
        setTimeout(() => {  
        }, 7000); 
        let result=await response.json();
        console.log(result);
        let k=result.articles.map((a)=>{return (

            <div className='news d-inline-block pl-5 px-5'>
            <div className="card bg-dark text-light mb-3  my-3 mx-3 px-2 py-2  " style={{maxWidth:"345px"} }>
      <img src={a.urlToImage} className="card-img-top" alt={news}/>
      <div className="card-body">
        <h4 className="card-title">{a.title}</h4>
        <p className="card-text">{a.description}</p>
        <a href={a.url} className="btn btn-success">Read More...</a>
      </div>
    </div>
    </div>
        )});
        console.log(k);
        setValue(k);
        
        
    }
    ak();
    
    return(
        <div>
          <Header/>
            <header className='BreakingNews'><center><img src={logo} alt={logo}></img></center></header>
            
           {/* <div className='news row pl-5 px-5'>
            <div className="card bg-dark text-light mb-3 ml-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"} }> */}
      {/* <img src={news} className="card-img-top" alt={news}/>
      <div className="card-body">
        <h4 className="card-title">Sample Title</h4>
        <p className="card-text">Lorem ipsum, dolor sit estias repellat error! Qui praesentium reiciendis ut fuga accusantium laudantium impedit.</p>
        <a href={a.url} className="btn btn-success">Read More...</a>
      </div>
    </div>
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2 " style={{maxWidth:"345px"} }>
      <img src={news} className="card-img-top" alt={news}/>
      <div className="card-body">
        <h4 className="card-title">Sample Title</h4>
        <p className="card-text">Lorem ipsum, dolor sit estias repellat error! Qui praesentium reiciendis ut fuga accusantium laudantium impedit.</p>
        <a href={a.url} className="btn btn-success">Read More...</a>
      </div>
    </div>
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2 " style={{maxWidth:"345px"} }>
      <img src={news}   className="card-img-top" alt={news}/>
      <div className="card-body">
        <h4 className="card-title">Sample Title</h4>
        <p className="card-text">Lorem ipsum, dolor sit estias repellat error! Qui praesentium reiciendis ut fuga accusantium laudantium impedit.</p>
        <a href={a.url} className="btn btn-success">Read More...</a>
      </div>
    </div>
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2 " style={{maxWidth:"345px"} }>
      <img src={news}  className="card-img-top" alt={news}/>
      <div className="card-body">
        <h4 className="card-title">Sample Title</h4>
        <p className="card-text">Lorem ipsum, dolor sit estias repellat error! Qui praesentium reiciendis ut fuga accusantium laudantium impedit.</p>
        <a href={a.url} className="btn btn-success">Read More...</a>
      </div>
    </div>
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2 " style={{maxWidth:"345px"} }>
      <img src={news}  className="card-img-top" alt={news}/>
      <div className="card-body">
        <h4 className="card-title">Sample Title</h4>
        <p className="card-text">Lorem ipsum, dolor sit estias repellat error! Qui praesentium reiciendis ut fuga accusantium laudantium impedit.</p>
        <a href={a.url} className="btn btn-success">Read More...</a>
      </div>
    </div>
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2 " style={{maxWidth:"345px"} }>
      <img src={news}  className="card-img-top" alt={news}/>
      <div className="card-body">
        <h4 className="card-title">Sample Title</h4>
        <p className="card-text">Lorem ipsum, dolor sit estias repellat error! Qui praesentium reiciendis ut fuga accusantium laudantium impedit.</p>
        <a href={a.url} className="btn btn-success">Read More...</a>
      </div>
    </div>
    </div> */}
    {value}
    <Footer/>
        </div>
    );
    

}