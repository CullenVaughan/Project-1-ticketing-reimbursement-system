import React, { FormEvent, useContext, useState } from "react";
import SubmitTicketInput from "./SubmitTicketInput";
import axios from "axios";
import { UserContext } from "../../Context/UserContext";

function SubmitTicketLogic() {
    const context = useContext(UserContext);

    const [ticketTypeInput, setTicketTypeInput] = useState("Travel");
    const [ticketAmountInput, setTicketAmountInput] = useState(0);
    const [ticketDescriptionInput, setTicketDescriptionInput] = useState("");
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        axios
            .post('http://localhost:8080/Ticket', {
                ticketSubmittedBy: context?.user?.id,
                ticketType: ticketTypeInput,
                ticketAmount: ticketAmountInput,
                ticketDescription: ticketDescriptionInput
            })
            .then((Response) => isVisible(Response.status + ""))
            .catch((Response) => isVisible(Response.status + ""));
    }

    function isVisible(status: string) {
        if (status === "200") setIsVisible1(true); else setIsVisible1(false);
        if (status === "400") setIsVisible2(true); else setIsVisible2(false);
    }

    return (
        <>
            <SubmitTicketInput
                ticketTypeInput={ticketTypeInput} setTicketTypeInput={setTicketTypeInput}
                ticketAmountInput={ticketAmountInput} setTicketAmountInput={setTicketAmountInput}
                ticketDescriptionInput={ticketDescriptionInput} setTicketDescriptionInput={setTicketDescriptionInput}
                handleSubmit={handleSubmit}
            />
            {isVisible1 && <label>Successfully Created a Ticket.</label>}
            {isVisible2 && <label>Amount must be greater than 0 or the description box is blank.</label>}
            <br/>
        </>
    )
}

export default SubmitTicketLogic