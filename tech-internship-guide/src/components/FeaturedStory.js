import React from "react";


export const FeaturedStory = (prop) => {
    const { featuredID } = prop;

    return(
        <div className="container bg-light p-3">
            <div className="row">
                <div className="col-2">
                    <img className="img-fluid" src={featuredID?.image} alt=""/>
                </div>
                <div className="col-10 bg-primary rounded">
                    {featuredID?.story}
                </div>
            </div>
        </div>
    );
};