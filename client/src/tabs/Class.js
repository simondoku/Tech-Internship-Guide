import React from "react";
import { BlockSection } from "../components/Block";

export const Class = () => {
    return(
        <div className="text-light">
            <BlockSection sectionName={"Programming Fundamentals"} sectionId={'pFundamentals'}/>
            <BlockSection sectionName={'Data Structures and Algorithm'} sectionId={'dSA'}/>
        </div>
    );
};
