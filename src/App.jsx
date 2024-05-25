import React, { useState } from 'react';
import './App.css';

function App() {
    const [editable, setEditable] = useState(false);
    const [people, setPeople] = useState([
        {
            name: "Rodylin Bernales",
            netWorth: 100000,
            address: "Guiwanon, Tubigon, Bohol"
        },
        {
            name: "John Doe",
            netWorth: 50000,
            address: "123 Main St, Anytown"
        }
    ]);

    function handleClick(index) {
        setEditable(index);
    }

    function handleChange(index, field, event) {
        const updatedPeople = [...people];
        updatedPeople[index] = { ...updatedPeople[index], [field]: event.target.value };
        setPeople(updatedPeople);
    }

    return (
        <div>
            {people.map((person, index) => (
                <div key={index} className={editable === index ? "card editable" : "card"} onClick={() => handleClick(index)}>
                    <h1>Person Information</h1>
                    <table>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <td>{editable === index ? <input type="text" value={person.name} onChange={(e) => handleChange(index, 'name', e)} /> : person.name}</td>
                            </tr>
                            <tr>
                                <th>Address</th>
                                <td>{editable === index ? <input type="text" value={person.address} onChange={(e) => handleChange(index, 'address', e)} /> : person.address}</td>
                            </tr>
                            <tr>
                                <th>Net Worth</th>
                                <td>{editable === index ? <input type="text" value={person.netWorth} onChange={(e) => handleChange(index, 'netWorth', e)} /> : person.netWorth}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
}

export default App;
