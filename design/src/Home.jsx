import React,{ useEffect  } from 'react'
import axios from 'ax'

function Home (){

    useEffect(()=>{
        axios.get ('http://localhost:8081/')
        .then(res => console.log(res))
        .catch (err=>console.log(err));
    }, {})
    return (
    <></>
    )
    }
    export default Home