import React from "react"
import "./storeItem.scss"
import ActionButton from "../UI/action-button/action-button"
import { withRouter } from 'react-router'

const storeItem = (props) => {

    const button = props.inCart ? <ActionButton onClickHandler={ () => props.history.push('/cart') } type="cart" /> : <ActionButton onClickHandler={ props.onAddHandler } type="add" />

    return (
        <div className="item">
            <div className="item__title">{ props.title }</div>
            <div className="item__image"></div>
            <div className="item__description">{ props.description }</div>
            <div className="item__price">${ props.price }</div>
            { button }
        </div>
    )
}

export default withRouter(storeItem)