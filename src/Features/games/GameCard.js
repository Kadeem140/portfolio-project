import {Card, CardImg, CardText, CardBody, CardTitle, Button} from 'reactstrap';
import Favorites from '../user/Favorites';
import "./gameCard.css"
// import FontAwesomeIcon from 'font-awesome';

const DisplayCard = (props) => { //image, title, genre, rating, etc
    // console.log("Games Card Props", props)
    
    const getPlatformStr = (str) => {
         str.map((e) => {
            return (
                <CardText>{e.name}</CardText>
            )
        })
}

    const addFavorite = (obj) => {
       return Favorites.push(obj)
    }

    const parentPlatforms = props.game.parent_platforms
    console.log(parentPlatforms, "PARENTS")

    return (
        <>
            <Card className='product'>
                <CardImg src={props.game.background_image} alt={props.game.name} className='products'/>
                <CardBody className = "cardBody">
                    <CardTitle className='cardText'>{props.game.name}</CardTitle>
                    <i class="fa fa-star fa-lg" > {props.game.rating}</i>
                    <CardText className='cardText'>Metacritic: {props.game.metacritic}</CardText>
                    <CardText className='cardText'><i class="fa fa-calendar fa-lg" > Released: {props.game.released}</i></CardText>
                    <CardText className='platformsCard'> Platforms: {parentPlatforms.map((e) => {
                        return (
                            <CardText className= 'platformsCard'>{e.platform.name}</CardText>
                        )
                    })}</CardText> 

                <div className="buttons">

                    <Button>Favorite</Button>
                    <Button>See More</Button>
                    <Button>Add to Cart</Button>
                    
                </div>
                   
                </CardBody>
            </Card>
        </>

        
    )

}

export default DisplayCard