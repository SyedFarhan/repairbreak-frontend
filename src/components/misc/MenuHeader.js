import React from 'react';
import { withRouter } from 'react-router';


const MenuHeader = ({ headerText, history }) => {
    return (
        <div>
            <div className="header-grid" >
                <div onClick={history.goBack} className="back-button"><i className="fa fa-chevron-left fa-lg" /> </div>
            <h2 className="RepairHeader-text">{headerText}</h2>
            </div>
            <hr />
        </div>
    );
};

export default withRouter(MenuHeader);