import { useState } from "react";
import ViewTickets from "./ViewTickets/ViewTickets";
import ViewAccounts from "./ViewAccounts/ViewAccounts";

function ManagerMain() {
    const [changeView, setChangeView] = useState("Tickets");

    return (
        <>
            <select value={changeView} onChange={
                (e: any) => setChangeView(e.target.value)
            }>
                <option value="Tickets">Tickets Table</option>
                <option value="Accounts">Accounts Table</option>
            </select>
            <br/>
            <br/>

            {(changeView == "Tickets") && <ViewTickets/>}
            {(changeView == "Accounts") && <ViewAccounts/>}
        </>
    )
}

export default ManagerMain