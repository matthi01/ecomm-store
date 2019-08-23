import React from "react"
import "./item.scss"
import QuantityToggle from "../UI/quantity-toggle/quantity-toggle"
import ActionButton from "../UI/action-button/action-button"
import { withRouter } from 'react-router'

class Item extends React.Component {
    state = {
        total: 0,
        inCart: false
    }

    decrementClickHandler = () => {
        if (this.state.total === 0) { return }
        this.setState(prevState => ({total: --prevState.total}))
    }

    incrementClickHandler = () => {
        this.setState(prevState => ({total: ++prevState.total}))
    }

    addToCart = () => {
        this.setState({inCart: true})
    }

    render() {

        const button = this.state.inCart ? <ActionButton onClickHandler={ () => this.props.history.push('/cart') } label="Go to Cart" /> : <ActionButton onClickHandler={ this.addToCart } label="Add to Cart" />

        return (
            <div className="item">
                <div className="item__title">{ this.props.title }</div>
                <div className="item__description">{ this.props.description }</div>
                <QuantityToggle
                    decrementClicked={ this.decrementClickHandler }
                    incrementClicked={ this.incrementClickHandler }
                    total={ this.state.total } />
                { button }
            </div>
        )
    }
}

export default withRouter(Item)