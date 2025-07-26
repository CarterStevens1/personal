import { useState } from "react";
import Accordion from "./accordion";

export default function AccordionDisplay() {

    return (
        <div className="max-w-[1200px] mx-auto pt-20">
            {dummyQuestions.map((question) => (
                <Accordion key={question.id} questions={question} />
            ))}
        </div>
    );
}

const dummyQuestions = [
    {
        id: 1,
        title: "Lorem title 1",
        info:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    },
    {
        id: 2,
        title: "Lorem title 2",
        info:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    },
    {
        id: 3,
        title: "Lorem title 3",
        info:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    }
];