import React from "react";
import { Outlet, Navigate, Route } from "react-router-dom"

type Props = {
    children: React.ReactNode
}

function ProtectedRoute({children}: Props) {
    const login = false

    if (login) {
        return <React.Fragment>{children}</React.Fragment>
    }
    return <Navigate to='/login' replace={true} />
}

export default ProtectedRoute