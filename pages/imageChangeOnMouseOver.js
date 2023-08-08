import React from "react";
import ImageToggleOnMouseOver from "../src/ImageToggleOnMouseOver";

const ImageChangeOnMouseOver = () => {
    return (
        <div>
            <ImageToggleOnMouseOver 
                primaryImg="/static/bw/cat1.png"
                secondaryImg="/static/col/catc1.jpg" 
                alt=""/>
                &nbsp;&nbsp;&nbsp;
            <ImageToggleOnMouseOver 
                primaryImg="/static/bw/cat2.png"
                secondaryImg="/static/col/catc2.jpg"
                alt=""/>
        </div>
    );
};

export default ImageChangeOnMouseOver;