import React, { useEffect, useState } from 'react';
import Packagedata from '../../DB/Packagedata';
import Packages from './Packages';
import axios from 'axios';
const PackageView = () => {
    const [packages,setPackages]=useState([])
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/packages/plist')
        .then(res=>{
            setPackages(res.data);
            console.log(res.data)})
    },[])
    
    return (
        <div>
            
            <div className="row">
                <div className="title">
                    <h2><center>Packages</center></h2>
                </div>
                {
                    packages.map(packages=><Packages item={packages}></Packages>)
                }
            </div>
        </div>
    );
    
};

export default PackageView;