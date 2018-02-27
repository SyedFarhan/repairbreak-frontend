import React, {Component} from 'react';

import RepairRouter from './RepairRouter.js';

class RepairContainer extends Component {
    state = {
        selections: {
            device: "",
            model: "",
            problem: "",
            additionalInfo: "",
        },
        customer: {
            name: "",
            number: "",
            email: "",
        },
    };

    onSelection = (selectionType, selectionName) => {
        const selections = this.state.selections;
        selections[selectionType] = selectionName;
        this.setState({ selections });
        console.log(this.state.selections);
    };

    onCustomerInputChange = ( customer ) => {
        this.setState({ customer });
        console.log("Customer state changed");
    };

    render() {
        return (
            <div className="inner" id="RepairContainer">
                <RepairRouter onSelection={this.onSelection} onCustomerInputChange={this.onCustomerInputChange} selections={this.state.selections} customer={this.state.customer} />
            </div>
        );
    }
}

export default RepairContainer;
