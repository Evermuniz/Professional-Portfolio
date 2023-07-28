import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import "../../styles/Contact.css";
import "../../styles/Section.css";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    emailjs.sendForm("service_opsr4zk", "template_catxfbs", form.current, "CTXgfX_9a2KvtsvjM").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
  } = useForm();

  const onBlur = async (fieldName) => {
    await trigger(fieldName);
  };

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const onSubmitHandler = (e) => {
    if (form.current.checkValidity()) {
      sendEmail(e);
      setShowSuccessMessage(true);
      reset();
    } else {
      form.current.reportValidity();
    }
  };

  return (
    <section className="container">
      {showSuccessMessage && (
        <div id="liveAlertPlaceholder">
          <div className="alert alert-success alert-dismissible" role="alert">
            <div>Message sent successfully!</div>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        </div>
      )}

      <h1 className="d-flex justify-content-center p-4">Contact Me</h1>

      <div className="d-flex justify-content-center mb-5">
        <form className="form needs-validation" ref={form} onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="mb-3 form-floating">
            <input
              className="form-control"
              id="floatingInput"
              type="text"
              name="user_name"
              placeholder="Name"
              {...register("name", {
                required: true,
              })}
              onBlur={() => onBlur("name")}
            />
            <label for="floatingInput">Name:</label>
          </div>
          {errors.name && errors.name.type === "required" && <p className="errorMsg">Name is required.</p>}

          <div className="form-floating  mb-3">
            <input
              className="form-control"
              id="floatingInput"
              type="text"
              name="user_email"
              placeholder="email"
              {...register("user_email", {
                required: true,
                pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              })}
              onBlur={() => onBlur("user_email")}
            />
            <label for="floatingInput">Email:</label>
          </div>
          {errors.user_email && errors.user_email.type === "required" && <p className="errorMsg">Email is required.</p>}
          {errors.user_email && errors.user_email.type === "pattern" && <p className="errorMsg">Email is not valid.</p>}

          <div className="form-floating">
            <textarea
              className="form-control"
              name="message"
              placeholder="  Message"
              {...register("message", {
                required: true,
              })}
              onBlur={() => onBlur("message")}
            />
            <label for="floatingInput">Message: </label>
          </div>
          {errors.message && errors.message.type === "required" && <p className="errorMsg">Message is required.</p>}

          <button className="d-flex justify-content-center container mt-4 btn form-control" type="submit">
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
