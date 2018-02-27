import React, {Component} from 'react';
import {withRouter} from 'react-router';
import SelectionLink from '../misc/SelectionLink.js';
import MenuHeader from "../misc/MenuHeader";


class PhoneList extends Component {
    currentPathname = this.props.history.location.pathname;

    onSelect = (evt) => {
        console.log(this.currentPathname);
        const selection = evt.target;
        const selectionType = selection.getAttribute('selectiontype');
        const selectionName = selection.name;
        this.props.onSelection(selectionType, selectionName);
    };


    render() {
        return (
            <div>
                <MenuHeader headerText="Select a device..." />
                <SelectionLink
                    currentPathname={this.currentPathname}
                    name="iphone"
                    onSelect={this.onSelect}
                    selectiontype="device"
                />

                <SelectionLink
                    currentPathname={this.currentPathname}
                    name="galaxy"
                    onSelect={this.onSelect}
                    selectiontype="device"
                />
            </div>
        );
    }
}

export default withRouter(PhoneList);
