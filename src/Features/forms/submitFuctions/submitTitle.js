import React, {useState, useEffect} from 'react';
import axios from 'axios'
import apiKey from '../../../utils/apiKey';


const url = `https://rawg.io/api/games?key=${apiKey}`
// https://rawg.io/api/games?search=portal

const submitTitle = (props) => {
    console.log(props, "Props object")
    axios.get(`https://rawg.io/api/games?key=${apiKey}&search=${props}`)
        .then(data => console.log(data, "Submit Title data"))
        .catch(err => console.log(err))

}

export default submitTitle

// const correct = https://rawg.io/api/games?key=ae077b18b59540b0ab7aafab14c8e80b&search=portal

// // https://rawg.io/api/games?key=ae077b18b59540b0ab7aafab14c8e80b&search=portal
// // https://rawg.io/api/games?key=ae077b18b59540b0ab7aafab14c8e80b?search=portal