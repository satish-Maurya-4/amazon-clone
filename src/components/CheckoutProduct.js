import React from 'react'
import { useStateValue } from './StateProvider'

const CheckoutProduct = ({ id, title, image, price, rating}) => {
    const [dispatch] = useStateValue();
    const removeFromBasket = ()=>{
        // remove item from basket....
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="checkout product" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    { title }
                </p>
                <p className="checkoutProduct__price">
                    <small>&#x20B9;</small>
                    <strong>{ price }</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating).fill().map((_)=>(
                            <p>&#9733;</p>
                        ))
                    }
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
