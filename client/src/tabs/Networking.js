import React from "react";
import { BlockSection } from "../components/Block";

export const Networking = () => {
    return(
        <div className="text-light">
            <BlockSection sectionName={"Diversity Groups"} sectionId={'diverseGroup'}/>
            <BlockSection sectionName={'Tech Conferences and Events'} sectionId={'techEvents'}/>
            <BlockSection sectionName={'Professional Organizations'} sectionId={'profOrg'}/>
        </div>
    );
};
