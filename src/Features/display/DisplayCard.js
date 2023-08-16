import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

const DisplayCard = (props) => { //image, title, genre, rating, etc
    console.log("Games Card Props", props)
    
    return (
        <>
            <Card>
                <CardImg src={props.game.background_image} alt={props.game.name} />
                <CardBody>
                    <CardTitle>{props.game.name}</CardTitle>
                    <CardText>{props.game.rating}</CardText>
                    <CardText>{props.game.released}</CardText>
                </CardBody>
            </Card>
        </>

        
    )

}

export default DisplayCard