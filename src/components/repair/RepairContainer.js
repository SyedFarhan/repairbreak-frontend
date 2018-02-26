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
    };

    onSelection = (selectionType, selectionName) => {
        const selections = this.state.selections;
        selections[selectionType] = selectionName;
        this.setState({selections: selections});
        console.log(this.state.selections);
    };

    render() {
        return (
            <div className="inner" id="RepairContainer">
                <RepairRouter onSelection={this.onSelection} selections={this.state.selections}/>
            </div>
        );
    }
}

export default RepairContainer;
