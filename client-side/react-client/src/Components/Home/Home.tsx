import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import ManagerMain from "../Manager/ManagerMain";
import EmployeeMain from "../Employee/EmployeeMain";

function Home() {
    const context = useContext(UserContext);

    return (
        <>
            <h1>Ticketing Reimbursement System</h1>
            {(context?.user == null) && <h6>Please register or login to use the Ticketing Reimbursement System.</h6>}
            {(context?.user != null && context.user.role == "Employee") && <EmployeeMain/>}
            {(context?.user != null && context.user.role == "Manager") && <ManagerMain/>}
        </>
    )
}

export default Home