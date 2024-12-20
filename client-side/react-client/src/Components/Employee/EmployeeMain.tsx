import SubmitTicketLogic from "./SubmitTicket/SubmitTicketLogic";
import PastTicketDisplay from "./ViewPastTickets/PastTicketDisplay";

function EmployeeMain() {
    return (
        <>
            <SubmitTicketLogic/>
            <PastTicketDisplay/>
        </>
    )
}

export default EmployeeMain