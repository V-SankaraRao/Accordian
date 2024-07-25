
import data from './data.js';
import './accordian.css';
import { useState } from 'react';

const Accordian = () => {
    const [sel, setsel] = useState(null);
    const [multiSelection, setMultiSelection] = useState(false);
    const [multiArray, setmultiArray] = useState([]);

    function handleSingle(id) {
        console.log("selected" + id);
        if (multiSelection) {
            let copy = [...multiArray];
            let findex = copy.indexOf(id);
            if (findex === -1) {
                copy.push(id);
            } else {
                copy.splice(findex, 1);
            }
            setmultiArray(copy);
        } else {
            setsel(sel === id ? null : id);
            setmultiArray([]); 
        }
    }

    return (
        <div className="parent">
            <button onClick={() => setMultiSelection(!multiSelection)}>
                Enable Multiple selection
            </button>
            <h1 className='title'>-: Accordian :-</h1>

            {data.map((e) => (
                <div className="child" key={e.id}>
                    <h1 onClick={() => handleSingle(e.id)} className="q">
                        {e.question} {e.id === sel || (multiArray.indexOf(e.id) !== -1) ? "-" : "+"}
                    </h1>
                    {(multiSelection && multiArray.indexOf(e.id) !== -1) || sel === e.id ? (
                        <h2>{e.answer}</h2>
                    ) : null}
                </div>
            ))}
        </div>
    );
};

export default Accordian;
