import React, {Component} from 'react';
import MenuHeader from "../misc/MenuHeader";
import {withRouter} from "react-router-dom";


class TextField extends Component {
    state = {
        customer: {
            name: "",
            number: "",
            email: "",
        }
    };

    onInputChange = (evt) => {
        const customer = this.state.customer;
        customer[evt.target.name] = evt.target.value;

        this.setState({ customer });
    };

    log = () => {
        console.log(this.state.customer);
    };

    render() {
        return (
            <div>
                <MenuHeader headerText="Additional Information"/>
                    <form className="contactInfoGrid" id="contactInfo">
                        <div>
                            Name*
                            <input type="text" value={this.state.customer.name} name="name" onChange={this.onInputChange} />
                        </div>
                        <div>
                            Number*
                            <input type="text" value={this.state.customer.number} name="number" onChange={this.onInputChange} />
                        </div>
                        <div>
                            Email*
                            <input type="text" value={this.state.customer.email} name="email" onChange={this.onInputChange} />
                        </div>
                    </form>
                    Additional Details
                    <textarea rows="4" cols="25" form="contactInfo" name="additionalDetails"/>
                    <button onClick={this.log} />
            </div>
        );
    }
}

export default withRouter(TextField);
