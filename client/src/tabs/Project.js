import React from "react";
import { BlockSection } from "../components/Block";

export const Project = () => {
    return(
        <div className="text-light">
            <BlockSection sectionName={"Web Development"} sectionId={'webDev'}/>
            <BlockSection sectionName={'Game Development'} sectionId={'gameDev'}/>
        </div>
    );
};
