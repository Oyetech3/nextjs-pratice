"use client"

import { useState } from "react";

type Role = 'settings' | 'notification'

const Example = () => {
    const [activeTab, setActiveTab] = useState<Role>("settings")

    const setTab = (tab: Role) => {
        setActiveTab(tab)
    }

    return ( 
        <div className="flex flex-col w-2/4 p-5 bg-amber-100 m-auto shadow-md justify-center ">
            <div className="flex gap-5">
                <button onClick={() => setTab("settings")} type="button">Settings</button>
                <button onClick={() => setTab("notification")} type="button">Notification</button>
            </div>

            {
                activeTab === "settings" && 
                <div className="py-3">
                    <h1 className="font-bold text-xl">Settings</h1>
                    <p>This is the setting</p>
                </div>
            }

            {
                activeTab === "notification" &&
                <div className="py-3">
                    <h1 className="font-bold text-xl">Notifications</h1>
                    <p>This is the notification</p>
                </div>
            }

        </div>
     );
}
 
export default Example;