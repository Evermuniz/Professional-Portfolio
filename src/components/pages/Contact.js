import React from "react";
import "./../../styles/Section.css";

export default function Contact() {
    return (
        <div className="section">
            <form>
                <div>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Message" />
                <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

