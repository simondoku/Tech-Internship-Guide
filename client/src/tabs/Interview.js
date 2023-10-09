import React from "react";
import { BlockSection } from "../components/Block";

export const Interview = () => {
    return(
        <div className="text-light">
            <BlockSection sectionName={"Technical Interview"} sectionId={'techInterview'}/>
            <BlockSection sectionName={'Behavioral Interview'} sectionId={'behInterview'}/>
        </div>
    );
};
