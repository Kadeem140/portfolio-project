import React, {useState, useEffect} from 'react'
import axios from "axios";
import APIKEY from "../utils/apiKey";
import DataFetching from '../utils/DataFetching';
import Header from '../Components/Header';


const url = `https://rawg.io/api/games?key=${APIKEY}&dates=2023-01-01, 2023-07-28&ordering=-added`

const ShopPage = () => {
    // useEffect = (() => {
    //     axios.get(url)
    //     .then(response => response.json())
    //     .then(response => {
    //         console.log(response, "API get call response")
    //     })
    // }, [])

    return (
        <>
            <Header />
            <p>SHOP PAGE</p>
            
        </>
    )
}

export default ShopPage
   


