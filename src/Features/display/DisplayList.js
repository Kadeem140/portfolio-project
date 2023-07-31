import {Col, Row} from 'reactstrap';
import DisplayCard from './DisplayCard';


const DisplayList = () => {
    //Renders a list of DisplayCards containing 
    //content about videogames returned from API call
    return (
        //Maps over some slice of start, checks if valid then returns
        //
        <Row>
            {/* <Col md className='m-1' key={idx}>
                <AnimatedDisplayCard item={featuredItem} />
            </Col> */}
        </Row>
    )
}

export default DisplayList