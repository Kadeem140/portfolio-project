import {Col, Row} from 'reactstrap';
import DisplayCard from './DisplayCard';


const DisplayList = (props) => {
    console.log(props.game, "DisplayList Props")
    //Renders a list of DisplayCards containing 
    //content about videogames returned from API call
    return (
        //Maps over some slice of start, checks if valid then returns
        //
        <Row>
            <Col md className='m-1' >
                <DisplayCard game={props.game} />
            </Col>
        </Row>
    )
}

export default DisplayList