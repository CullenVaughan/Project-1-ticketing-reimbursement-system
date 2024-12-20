import { useEffect, useState } from "react";
import { Ticket } from "../../Employee/ViewPastTickets/PastTicketDisplay";
import axios from "axios";

function ViewTickets() {
    const [ticketStatusSelect, setTicketStatusSelect] = useState("Pending");
    const [data, setData] = useState<Ticket[]>([]);
    const [loading, setLoading] = useState(true);
    const [button, setButton] = useState(true);

    useEffect(() => {
        setButton(true);
        getTickets();
    }, [ticketStatusSelect, button]);

    function getTickets() {
        setLoading(true);
        if (ticketStatusSelect == "No Filter") {
            axios
                .get('http://localhost:8080/Ticket')
                .then((Response) => {
                    setData(Response.data);
                    setLoading(false);
                })
                .catch((error) => console.error('Error fetching data:', error));
        } else {
            axios
                .get('http://localhost:8080/Ticket/' + ticketStatusSelect)
                .then((Response) => {
                    setData(Response.data);
                    setLoading(false);
                })
                .catch((error) => console.error('Error fetching data:', error));
        }
    }

    function updateTicketStatus(currentTicket: Ticket, status: string) {
        axios
            .patch('http://localhost:8080/Ticket/' + status, {
                ticketId: currentTicket.ticketId,
                ticketSubmittedBy: currentTicket.ticketSubmittedBy,
                ticketType: currentTicket.ticketType,
                ticketAmount: currentTicket.ticketAmount,
                ticketDescription: currentTicket.ticketDescription,
                ticketStatus: currentTicket.ticketStatus
            })
            .then(() => setButton(false))
            .catch((error) => console.error('Error fetching data:', error));
    }

    return (
        <>
            <select value={ticketStatusSelect} onChange={
                (e: any) => setTicketStatusSelect(e.target.value)
            }>
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Denied">Denied</option>
                <option value="No Filter">No Filter</option>
            </select>
            <span>      </span>
            <button onClick={(e: any) => setButton(false)}>Reload Tickets Table</button>
            <br/>
            <br/>

            <div>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <table border={1} style={{width: "100%", borderCollapse: "collapse"}}>
                        <thead>
                            <tr>
                                <th>ticket Submitted By</th>
                                <th>Ticket type</th>
                                <th>Ticket Amount</th>
                                <th>Ticket Description</th>
                                <th>Ticket Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((ticket) => {
                                    return (
                                        <tr key={ticket.ticketId}>
                                            <td>{ticket.ticketSubmittedBy}</td>
                                            <td>{ticket.ticketType}</td>
                                            <td>{ticket.ticketAmount}</td>
                                            <td>{ticket.ticketDescription}</td>
                                            <td>{ticket.ticketStatus}</td>
                                            {(ticket.ticketStatus == "Pending") && <button onClick={() => updateTicketStatus(ticket, "Approved")}>Approved</button>}
                                            {(ticket.ticketStatus == "Pending") && <button onClick={() => updateTicketStatus(ticket, "Denied")}>Denied</button>}
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                )}
            </div>
        </>
    )
}

export default ViewTickets