import React from "react"
import "./navigation.scss"
import { connect } from "react-redux"
import { Link, withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faHome } from '@fortawesome/free-solid-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'

const navigation = (props) => {
    return (
        <nav className="navigation">
            <Link className="navigation__title-section" to="/">
                <FontAwesomeIcon className="navigation__logo" icon={faReact} />
                <div className="navigation__title">Title</div>
            </Link>
            <div className="navigation__menu">
                <Link className={ "navigation__menu__item" + (props.location.pathname === "/" ? " navigation__menu__item__active" : "" )}  to="/">
                    <FontAwesomeIcon icon={faHome} />
                </Link>
                <Link className={ "navigation__menu__item" + (props.location.pathname === "/cart" ? " navigation__menu__item__active" : "") } to="/cart">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    { props.cartItems.length > 0 ? <div className="navigation__menu__item__counter">( { props.cartItems.length } )</div> : null}
                </Link>
            </div>
        </nav>
    )
}

const mapStateToProps = (state)=>{
    return {
        cartItems: state.cart.cartItems
    }
}

export default withRouter(connect(mapStateToProps)(navigation))