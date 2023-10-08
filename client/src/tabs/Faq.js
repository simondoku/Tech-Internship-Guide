import React from "react";
import { Accordion } from "../components/Accordion";

export const Faq = () => {
    return(
        <>
            <p className="mb-4 text-light text-center">Frequently Asked Questions</p>
            <div style={{display: "flex", justifyContent: "center"}}>
                <Accordion/>
            </div>
        </>
    );
};