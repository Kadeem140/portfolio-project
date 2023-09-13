import { Stack } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { removeFromCart } from "./cartSlice";
import { Button } from "reactstrap";

export function CartItem(props) {

    const dispatch = useDispatch()

    const remove = () => {
        console.log("item removed!")
        dispatch(removeFromCart())
    }
    

    return (
        <Stack direction= "horizontal" gap={2} className="d-flex align-items-center">
            <img src={props.game.image} alt={props.game.name} 
                style={{width: "125px", height: "75px", objectFit: 'cover'}}/>
            <div className="me-auto">
                <div>
                    {item.name} {quantity > 1 && <span 
                        className="text-muted" style={{fontSize:".65rem"}}>
                        {quantity}x
                    </span>}
                </div>
                <div className="text-muted" style={{ fontSize: ".75rem"}}>
                    {formatCurrency(item.price)}
                </div>
            </div>
            <div>
                {formatCurrency(item.price * quantity)}
            </div>
            <Button variant="outline-danger" size="sm" onClick={remove()}>
                    &times;
            </Button>
            
        </Stack>
    )
}