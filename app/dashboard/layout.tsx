import React from "react";
import UserAnalytics from "./@useranalytics/page";
import Notifications from "./@notifications/page";
import Revenue from "./@revenue/page";

type Props = {
    children: React.ReactNode,
    useranalytics: React.ReactNode,
    notifications: React.ReactNode,
    revenue: React.ReactNode,
    login: React.ReactNode,
}

const dashboardLayout = ({children,useranalytics,notifications,revenue,login}: Props) => {
    const isLoggedIn = true
    return isLoggedIn ? ( 
        <div>
            <div>{children}</div>
            <div style={{display: "flex"}}>
                <div style={{display: "flex", flexDirection: "column", width: "50%"}}>
                    <div>{useranalytics}</div>
                    <div>{revenue}</div>
                </div>
                <div style={{display: "flex", flex: 1}}>{notifications} </div>
            </div>
        </div>
     ) : login;
}
 
export default dashboardLayout;