import React from "react";
import { BlockSection } from "../components/Block";

export const Interview = () => {
    return(
        <div className="text-light">
            <BlockSection sectionName={"Technical Interview"} sectionId={'dSA'}/>
            <BlockSection sectionName={'Behavioral Interview'} sectionId={'dSA'}/>
        </div>
    );
};
