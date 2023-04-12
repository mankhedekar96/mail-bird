import React, { useState } from "react";
import DashboardMenu from "./DashboardMenu";
import Inbox from "../Inbox/Inbox";
import Sent from "../Sent/Sent";

function DashboardBody() {
    const [view, setView] = useState('inbox');

    const getView = (screen) => {
        switch(screen){
            case 'sent':
            return <Sent />;
            default:
            case 'inbox':
            return <Inbox />;
        }
    }
    return (
        <section className="d-flex mt-4">
            <DashboardMenu setView={setView} />
            <div className="w-75 bg-white py-4 px-3">
                { getView(view)}
            </div>
        </section>
    )
}

export default DashboardBody;
