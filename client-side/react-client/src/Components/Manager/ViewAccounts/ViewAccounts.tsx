import axios from "axios";
import { useEffect, useState } from "react";

type Account = {
    accountId?: number;
    username: string;
    password: string;
    role: string;
}

function ViewAccounts() {
    const [data, setData] = useState<Account[]>([]);
    const [loading, setLoading] = useState(true);
    const [button, setButton] = useState(true);

    useEffect(() => {
        setButton(true);
        getAccounts();
    }, [button]);

    function getAccounts() {
        setLoading(true);
        axios
            .get('http://localhost:8080/Account')
            .then((Response) => {
                setData(Response.data);
                setLoading(false);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }

    function updateAccountRole(currentAccount: Account, newRole: string) {
        axios
            .patch('http://localhost:8080/Account', {
                accountId: currentAccount.accountId,
                username: currentAccount.username,
                role: newRole
            })
            .then(() => setButton(false))
            .catch((error) => console.error('Error fetching data:', error));
    }

    return (
        <>
            <span>      </span>
            <br/>
            <br/>

            <div>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <table border={1} style={{width: "100%", borderCollapse: "collapse"}}>
                        <thead>
                            <tr>
                                <th>Account Id</th>
                                <th>Account Username</th>
                                <th>Account Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((account) => {
                                    return (
                                        <tr key={account.accountId}>
                                            <td>{account.accountId}</td>
                                            <td>{account.username}</td>
                                            <td>{account.role}</td>
                                            {(account.role == "Manager") && <button onClick={() => updateAccountRole(account, "Employee")}>Change role to Employee</button>}
                                            {(account.role == "Employee") && <button onClick={() => updateAccountRole(account, "Manager")}>Change role to Manager</button>}
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

export default ViewAccounts