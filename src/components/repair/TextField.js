import React, {Component} from 'react';
import MenuHeader from "../misc/MenuHeader";
import {withRouter} from "react-router-dom";


class TextField extends Component {
    state = {
        customer: {
            name: "",
            number: "",
            email: "",
        },
    };

    componentWillMount = () => {
        const customer  = this.props.customer;
        this.setState({ customer });

    };

    onInputChange = (evt) => {
        const customer = this.state.customer;
        customer[evt.target.name] = evt.target.value;
        this.setState({ customer });
    };

    log = () => {
        console.log(this.state.customer);
        console.log(this.props.customer);
    };

    handleSubmit = (evt) => {
        this.props.onCustomerInputChange(this.state.customer);
        evt.preventDefault();
}

    render() {
        return (
            <div>
                <MenuHeader headerText="Additional Information"/>
                    <form className="contactInfoGrid" id="contactInfo" onSubmit={this.handleSubmit}>

                        <div id="inputs">
                            <div>
                                Name*
                                <input type="text" required value={this.state.customer.name} name="name" onChange={this.onInputChange} />
                            </div>
                            <div>
                                Number*
                                <input type="text" required value={this.state.customer.number} name="number" onChange={this.onInputChange} />
                            </div>
                            <div>
                                Email*
                                <input type="text" required value={this.state.customer.email} name="email" onChange={this.onInputChange} />
                            </div>
                        </div>

                        <div>
                            <input type="submit" value="Submit" id="customerFormSubmit" />
                        </div>
                    </form>
                    <button onClick={this.log} />
            </div>
        );
    }
}

export default withRouter(TextField);
