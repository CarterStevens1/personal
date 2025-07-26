import { useState } from "react";

export default function Accordion({ questions }) {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className="border border-gray-300 rounded-lg p-4 m-4 bg-white/10">
            <div className="flex justify-between items-center">
                <h2>{questions.title}</h2>
                <button onClick={() => setOpen(!isOpen)}>
                    {isOpen ? "Close" : "Open"}
                </button>
            </div>

            {isOpen && <p className="pt-6">{questions.info}</p>}

        </div>
    );
}