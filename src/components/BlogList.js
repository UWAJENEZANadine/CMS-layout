import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import "../css/BlogList.css"

const BlogList = () =>{

  const [lists, setLists] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.ir/users")
      .then((data) =>setLists(data.data));
  }, []);
  

  return(
    <div className="lists-container">
      
        {
         lists.map((value)=>{
          return<h1>{value.username},  {value.email}</h1>
         })
        }
     
 
    </div>

  )
}
export default BlogList