import React, {Component} from 'react';
import MenuHeader from "../misc/MenuHeader";
import {withRouter} from "react-router-dom";


class TextField extends Component {
    render() {
        return (
            <div>
                <MenuHeader previousPath="/repair/iphone/x" headerText="Additional Information"/>
                <textarea rows="4" cols="50" />
            </div>
        );
    }
}

export default withRouter(TextField);
