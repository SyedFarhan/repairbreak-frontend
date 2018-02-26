import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';


const MenuHeader = ({ previousPath, headerText, history, comp }) => {
    return (
        <div>
            <div className="headergrid" >
                <div onClick={history.goBack} className="backbutton"><i className="fa fa-chevron-left fa-lg" /> </div>
            <h2 className="RepairHeader-text">{headerText}</h2>
            </div>
            <hr />
        </div>
    );
};

export default withRouter(MenuHeader);