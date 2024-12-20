import React from "react";

type SubmitTicketInputProps = {
    ticketTypeInput: string, setTicketTypeInput: React.Dispatch<React.SetStateAction<string>>,
    ticketAmountInput: number, setTicketAmountInput: React.Dispatch<React.SetStateAction<number>>,
    ticketDescriptionInput: string, setTicketDescriptionInput: React.Dispatch<React.SetStateAction<string>>,
    handleSubmit: any
};

function SubmitTicketInput({
    ticketTypeInput, setTicketTypeInput,
    ticketAmountInput, setTicketAmountInput,
    ticketDescriptionInput, setTicketDescriptionInput,
    handleSubmit}: SubmitTicketInputProps
) {
    return (
        <>
            <h5>Submit a ticket</h5>
            <form onSubmit={handleSubmit}>
                <label>
                    Reimbursement Ticket Type:
                    <select value={ticketTypeInput} onChange={
                        (e: any) => setTicketTypeInput(e.target.value)
                    }>
                        <option value="Travel">Travel</option>
                        <option value="Lodging">Lodging</option>
                        <option value="Food">Food</option>
                        <option value="Other">Other</option>
                    </select>
                </label>
                <br/>
                <label>
                    Reimbursement Ticket Amount:
                    <input type="number" value={ticketAmountInput} onChange={
                        (e: any) => setTicketAmountInput(e.target.value)
                    }></input>
                </label>
                <br/>
                <textarea placeholder="Reimbursement Ticket Description" value={ticketDescriptionInput} maxLength={255} style={{width: "50%"}} onChange={
                    (e: any) => setTicketDescriptionInput(e.target.value)
                }></textarea>
                <br/>
                <button type="submit">Submit Ticket</button>
                <br/>
            </form>
        </>
    )
}

export default SubmitTicketInput