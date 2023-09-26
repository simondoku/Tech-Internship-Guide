import React from "react";
import { BlockSection } from "../components/Block";

export const Note = () => {
    return(
        <div className="text-light">
            <BlockSection sectionName={"Personal Notes"} sectionId={'dSA'}/>
            <BlockSection sectionName={'Study Groups'} sectionId={'dSA'}/>
        </div>
    );
};
