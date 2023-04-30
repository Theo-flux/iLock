import React, { useEffect } from "react";
import { Outlet, Navigate, Route } from "react-router-dom"

type Props = {
    children: React.ReactNode
}

function ProtectedRoute({children}: Props) {
    let login = sessionStorage.getItem('firebase:authUser:AIzaSyAS2wQHL8XjxB2irMVjm07uSh77Cqrcv6M:[DEFAULT]') ? true : false;

    if (login) {
        return <React.Fragment>{children}</React.Fragment>
    }
    return <Navigate to='/login' replace={true} />
}

export default ProtectedRoute