import axios from 'axios'
import apiKey from '../../../utils/apiKey';



const submitTitle = (props) => {
    console.log(props, "Props object")
    axios.get(`https://rawg.io/api/games?key=${apiKey}&search=${props}`)
        .then(data => console.log(data, "Submit Title data"))
        .catch(err => console.log(err))

}

export default submitTitle