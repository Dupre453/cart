import formatPrice from "../../utils/priceFormatter";
import './CartFooter.scss'

const CartFooter = ({total}) => {
    const {count, price} = total

    return(
        <footer className="cart-footer">
            <div className="cart-footer__count">{count} ед.</div>
            <div className="cart-footer__price">
                {formatPrice(price)} руб.
            </div>
        </footer>
    )
}

export default CartFooter