import React from "react";
import { BlockSection } from "../components/Block";

export const Resume = () => {
    return(
        <div className="text-light">
            <BlockSection sectionName={"Resume Building"} sectionId={'resBuild'}/>
            <BlockSection sectionName={'Resume Templates'} sectionId={'resTemp'}/>
            <BlockSection sectionName={'Portfolio Showcase'} sectionId={'portShow'}/>
        </div>
    );
};
