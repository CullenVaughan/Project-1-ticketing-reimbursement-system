import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import { error } from "console";

export type Ticket = {
    ticketId?: number;
    ticketSubmittedBy: number;
    ticketType: string;
    ticketAmount: number;
    ticketDescription: string;
    ticketStatus: string;
}

function PastTicketDisplay() {
    const context = useContext(UserContext);
    const [ticketTypeSelect, setTicketTypeSelect] = useState("No Filter");
    const [data, setData] = useState<Ticket[]>([]);
    const [loading, setLoading] = useState(true);
    const [button, setButton] = useState(true);

    useEffect(() => {
        setButton(true);
        getUsersPastTickets();
    }, [ticketTypeSelect, button]);

    function getUsersPastTickets() {
        setLoading(true);
        if (ticketTypeSelect == "No Filter") {
            axios
                .get('http://localhost:8080/Ticket/0/0/' + context?.user?.id)
                .then((Response) => {
                    setData(Response.data);
                    setLoading(false);
                })
                .catch((error) => console.error('Error fetching data:', error));
        } else {
            axios
                .get('http://localhost:8080/Ticket/' + context?.user?.id + '/' + ticketTypeSelect)
                .then((Response) => {
                    setData(Response.data);
                    setLoading(false);
                })
                .catch((error) => console.error('Error fetching data:', error));
        }
    }

    return (
        <>
            <h5>Past Tickets Table</h5>
            <select value={ticketTypeSelect} onChange={
                (e: any) => setTicketTypeSelect(e.target.value)
            }>
                <option value="No Filter">No Filter</option>
                <option value="Travel">Travel</option>
                <option value="Lodging">Lodging</option>
                <option value="Food">Food</option>
                <option value="Other">Other</option>
            </select>
            <span>      </span>
            <button onClick={(e: any) => setButton(false)}>Reload Past Tickets Table</button>
            <br/>
            <br/>
            <div>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <table border={1} style={{width: "100%", borderCollapse: "collapse"}}>
                        <thead>
                            <tr>
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
                                            <td>{ticket.ticketType}</td>
                                            <td>{ticket.ticketAmount}</td>
                                            <td>{ticket.ticketDescription}</td>
                                            <td>{ticket.ticketStatus}</td>
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

export default PastTicketDisplay