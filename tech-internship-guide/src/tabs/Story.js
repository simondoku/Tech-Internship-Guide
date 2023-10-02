import React from "react";
import { FeaturedStory } from "../components/FeaturedStory";
import { STORIES } from "../core/block-cores";

export const Story = () => {
    return(
        <div className="text-light">
            {STORIES.map((item, index) => (
                <FeaturedStory featuredItem={item} key={index}/>
            ))}   
        </div>
    );
};