import { useSelector } from "react-redux";
import {Col, Row } from 'reactstrap';
import CartCard from "./CartCard";
import { selectAllCartItems } from "./cartSlice";

const CartList = () => {
    const cartItems = useSelector(selectAllCartItems);

    return (
        <Row className="ms-auto">
            {
                cartItems.map((game) => {
                    console.log(game, "game to be mapped:")
                    return (
                        <Col md="5" className='m-4' key={game.id}>
                            <CartCard game={game} />
                        </Col> 
                        
                    
                    );
                })}
        </Row>
    );
};

export default CartList;