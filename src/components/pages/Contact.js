import React from "react";

export default function Contact() {
    return (
        <div>
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

