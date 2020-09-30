import React from 'react';
import PropTypes from "prop-types"


 class CreditCardBox extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <div className="credit_card_box">
                    <input
                        onChange={this.props.valueCardNumber}
                        // value={this.state.person.creditNumber}
                        className="credit_card_box_input" name="creditNumber" type="number"/>
                </div>
                <div style={{float: "right"}}
                    className="err_text" id="err_credit_card">
                    card must have 16 digits
                </div>
            </div>

        )
    }
}

CreditCardBox.propTypes = {
    fun : PropTypes.func
}

export default CreditCardBox