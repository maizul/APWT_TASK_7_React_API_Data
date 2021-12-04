import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from 'axios';
import PackagedetailsView from "./PackagedetailsVIew";

const Packagedetails = () => {
    const {id}=useParams();
    const [packages,setPackage]=useState([])
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/packagedetails/${id}`)
        .then(res=>{
            console.log(res.data);
            setPackage(res.data)
        })
    })
    console.log(packages)
    return (
        <div>
            <PackagedetailsView item={packages}/>
        </div>
    );
};

export default Packagedetails;