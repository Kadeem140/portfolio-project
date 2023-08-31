import React, {useState, useEffect} from 'react';
import axios from 'axios';
import apiKey from '../../utils/apiKey';
// import Game

import {Col, Row} from 'reactstrap';
import DisplayCard from './GameCard';
import "./gameCard.css"
import "../../Pages/pages.css"


const DisplayList = (props) => {
    // console.log(props.game, "DisplayList Props")
    //Renders a list of DisplayCards containing 
    //content about videogames returned from API call
    return (
        //Maps over some slice of start, checks if valid then returns
        //
        
          <div className = "parent">

                <DisplayCard game={props.game} />
            
          </div>
        
    )
}

export default DisplayList