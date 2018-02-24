import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import SelectionLink from '../misc/SelectionLink.js';


class PhoneList extends Component {
    currentPathname = this.props.history.location.pathname;

    onSelect = (evt) => {
        const selection = evt.target;
        const selectionType = selection.getAttribute('selectiontype');
        const selectionName = selection.name;
        this.props.onSelection(selectionType, selectionName);
    };


    render() {
        return (
            <div class="inner" id="RepairContainer">
                <div class="headergrid">
                    <Link to="/" href="/" class="fa fa-chevron-left fa-2x backbutton"></Link>
                    <h2 id="PhoneList-text">Select a device...</h2>
                </div>
                <hr/>
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
