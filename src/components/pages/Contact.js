import React from "react";
import "./../../styles/Section.css";
import "./../../styles/Form.css";

export default function Contact() {
  return (
    <section className="section">
        <h1>Contact</h1>
      <div class="form-box">
        <form>
          <div class="info-box">
            <input type="text" name="" placeholder="Name" required="" />
          </div>
          <div class="info-box">
            <input type="email" name="" placeholder="email" required="yes" />
          </div>
          <div class="info-box">
            <input type="text" name="" placeholder="Message" required="" />
          </div>
          <center>
            <a href="#">
              SEND
              <span></span>
            </a>
          </center>
        </form>
      </div>
    </section>
  );
}
