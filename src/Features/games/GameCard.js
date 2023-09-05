import {Card, CardImg, CardText, CardBody, CardTitle, Button} from 'reactstrap';
import Favorites from '../user/Favorites';
import { useDispatch } from 'react-redux';
import "./gameCard.css"
import { addCartItem } from '../cart/cartSlice';
// import FontAwesomeIcon from 'font-awesome';

const GameCard = (props) => { //image, title, genre, rating, etc
    // console.log("Games Card Props", props)
    const dispatch = useDispatch();

    const parentPlatforms = props.game.parent_platforms

    const game = {
        image: props.game.background_image,
        name: props.game.name,
        rating: props.game.rating,
        metacritic: props.game.metacritic,
        released: props.game.released,
        platforms: parentPlatforms.map((e) => {
            return (
                e.platform.name
            )
        }),
        // date: new Date(Date.now())
    }

    const addToCart = () => {
        console.log('Game:', game);
        dispatch(addCartItem(game));

    }

    // const addFavorite = (obj) => {
    //    return Favorites.push(obj)
    // }

    

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
                    <Button onClick={addToCart}> Add to Cart</Button>
                    
                </div>
                   
                </CardBody>
            </Card>
        </>

        
    )

}

export default GameCard