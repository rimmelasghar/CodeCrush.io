import React from "react";

const Shape = (props) =>{
    const shape1 = {
        left: props.left,
        right: props.right,
        margin: "auto",
        top: props.top,
        height:props.height,
        position: "absolute",
      };

    return(
    <img src={props.source} alt="fig1" style={shape1} className="shape" />
    );
}

export default Shape;