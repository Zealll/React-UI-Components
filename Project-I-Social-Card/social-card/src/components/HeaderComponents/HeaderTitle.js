import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import moment from 'moment'

const HeaderTitle = () => {
    return (
        <div className="headerContent">
        <h1>Lambda School <span className="atSpan">@LambdaSchool {moment().format('D MMM')}</span> </h1>
        <HeaderContent />
        </div>
    )
}

export default HeaderTitle
