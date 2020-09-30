import React from 'react';
import PropTypes from "prop-types"


 class CreditCardBox extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        console.log(this.props)
        return (
            <div className="credit_card_box">
                <input className="credit_card_box_input" name="creditNumber" onChange={this.props.fun}  type="text"/>
            </div>
        )
    }
}

CreditCardBox.propTypes = {
    fun : PropTypes.func
}

export default CreditCardBox