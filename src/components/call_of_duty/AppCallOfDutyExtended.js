import React from 'react'
import { Helmet } from 'react-helmet'
import AppCODHeader from './AppCODHeader'
import "../../assets/css/cod.css";

const AppCallOfDutyExtended = () => {
    return (
        <div>
            <Helmet><title>COD | Call of Duty Extended</title></Helmet>
            <AppCODHeader />
            <div className="codExtended"></div>
        </div>
    )
}

export default AppCallOfDutyExtended
