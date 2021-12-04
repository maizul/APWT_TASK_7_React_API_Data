import React, { useState,useEffect } from 'react';
import Eventdb from '../../DB/Eventdb';
import Events from './Events';
import axios from 'axios';
const EventView = () => {
    const [events,setEvents]=useState([])
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/events/list')
        .then(res=>{
            setEvents(res.data);
            console.log(res.data)})
    },[])
    
    return (
        <div>
            
            <div className="row">
                <div className="title">
                    <h2><center>Events</center></h2>
                </div>
                {
                    events.map(events=><Events item={events}></Events>)
                }
            </div>
        </div>
    );
};

export default EventView;