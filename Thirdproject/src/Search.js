import { useState } from 'react';
export default function Search() {

    const [find, setFind] = useState("");
    const name = ["Dennis", "Richie", "Paul", "Frank"]
    const student = name.filter((names) => names.tolowerCase().include(find.tolowerCase()));
    return (
        <div>
            <h2>Demo to show search</h2>
            <input type="text"
                placeholder='Entry key to search'
                value={find}
                onChange={(e) => setFind(e.targetvalue)} />
            <ul>
                {student.map((item, index) => (<li key={index}>{item}</li>))}
            </ul>

        </div>

    )
}