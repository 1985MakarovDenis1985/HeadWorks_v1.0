import React from 'react';


export default class extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="credit_card_box">
                <input className="credit_card_box_input" name="creditNumber" onChange={this.props.fun}  type="text"/>
            </div>
        )
    }

}