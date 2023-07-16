import React from "react";

function Project(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>{props.name}</strong>
                    </li>
                    <li>
                        <strong>{props.deployed}</strong>
                    </li>
                    <li>
                        <strong>{props.github}</strong>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Project;