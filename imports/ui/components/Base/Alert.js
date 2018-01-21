import React from "react";

const Alert = props => (
    <div
        className={`alert alert-${props.kind || "primary"} text-center`}
        role="alert"
    >
        {props.text}
    </div>
);

export default Alert;
