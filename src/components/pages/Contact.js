import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import "../../styles/Contact.css";
import "../../styles/Section.css";

export const Contact = () => {
  const form = useRef();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_opsr4zk", "template_catxfbs", form.current, "CTXgfX_9a2KvtsvjM").then(
      (result) => {
        console.log(result.text);
        setIsModalOpen(true);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const handleButtonClick = () => {
    form.current.reset();
    setIsModalOpen(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();

  const onBlur = async (fieldName) => {
    await trigger(fieldName);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // Check if the form is valid before submitting
    if (form.current.checkValidity()) {
      sendEmail(e);
    } else {
      form.current.reportValidity(); // Display the browser's default validation messages
    }
  };


  return (
    <section className="container">
      <div className={`modal ${isModalOpen ? "show" : ""}`} tabIndex="-1" id="modal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Message sent!</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Thank you for your message. I will reach out to you within the next 48 hours.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleButtonClick}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <h1 className="d-flex justify-content-center p-4">Contact Me</h1>

      <div className="d-flex justify-content-center container">
        <form className="form needs-validation" ref={form} onSubmit={onSubmitHandler}>
          <div className="justify-content-center d-flex mb-3 form-control">
            <input
              className="ms-2 w-75"
              type="text"
              name="user_name"
              placeholder="  Name"
              {...register("name", {
                required: true,
              })}
              onBlur={() => onBlur("name")}
            />
            {errors.name && errors.name.type === "required" && <p className="errorMsg">Name is required.</p>}
          </div>

          <div className="form-control  mb-3">
            <label>Email:</label>
            <input
              type="text"
              name="user_email"
              {...register("user_email", {
                required: true,
                pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              })}
              onBlur={() => onBlur("user_email")}
            />
            {errors.user_email && errors.user_email.type === "required" && (
              <p className="errorMsg">Email is required.</p>
            )}
            {errors.user_email && errors.user_email.type === "pattern" && (
              <p className="errorMsg">Email is not valid.</p>
            )}
          </div>

          <div className="justify-content-center d-flex form-control">
            <textarea
              name="message"
              rows={4}
              cols={40}
              placeholder="  Message"
              {...register("message", {
                required: true,
              })}
              onBlur={() => onBlur("message")}
            />
            {errors.message && errors.message.type === "required" && <p className="errorMsg">Message is required.</p>}
          </div>

          <button className="d-flex justify-content-center container mt-4 w-50 form-control" type="submit">
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
            <span>Send</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
