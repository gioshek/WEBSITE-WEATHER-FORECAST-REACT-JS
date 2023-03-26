import React from "react";

const Info = props => {
    return(
        <div>
            <h2 onClick={props.changeText}>{props.title}</h2>
            <p>Узнать погоду в вашем городе!</p>
        </div>
    )
}

export default Info;