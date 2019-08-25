import React from "react"
import "./storeItem.scss"
import ActionButton from "../UI/action-button/action-button"
import { withRouter } from 'react-router'

const storeItem = (props) => {

    const button = props.inCart ? <ActionButton onClickHandler={ () => props.history.push('/cart') } label="Go to Cart" /> : <ActionButton onClickHandler={ props.onAddHandler } label="Add to Cart" />

    return (
        <div className="item">
            <div className="item__title">{ props.title }</div>
            <div className="item__description">{ props.description }</div>
            { button }
        </div>
    )
}

export default withRouter(storeItem)