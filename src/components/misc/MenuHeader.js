import React from 'react';
import { Link } from 'react-router-dom';

const MenuHeader = ({ previousPath, headerText }) => {
    return (
        <div>
            <div class="headergrid">
            <Link to={previousPath} href={previousPath} class="backbutton"><i class="fa fa-chevron-left fa-lg "/></Link>
            <h2 class="RepairHeader-text">{headerText}</h2>
            </div>
            <hr />
        </div>
    );
};

export default MenuHeader;