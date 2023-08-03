import React, { useRef, useState } from "react";

//form hooks from react
import { useForm } from "react-hook-form";

//service to send me an email when someone fills out the contact form
import emailjs from "@emailjs/browser";
import "../../styles/Contact.css";

//entire contact form to be exported
export const Contact = () => {
  //useRef hook used to send the current form data to the email service
  const form = useRef();

  //send email function
  const sendEmail = (e) => {
    //parameters specific to the emailjs sertvice
    emailjs.sendForm("service_opsr4zk", "template_catxfbs", form.current, "CTXgfX_9a2KvtsvjM").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  //all the variables being destructured in useForm to control form submission
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
  } = useForm();

  //when a user clicks into a field and clicks out, or on blur, then call the trigger variable
  const onBlur = async (fieldName) => {
    await trigger(fieldName);
  };

  //set state to false to control the alert displayed upon successful submission
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  //when form is submitted then check the validity, a feature of bootstrap, and if successful then trigger the sendEmail function
  //and change the state to display the alert message
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
      {/* the success message that displays depending on state */}
      {showSuccessMessage && (
        <div id="liveAlertPlaceholder">
          <div className="alert alert-success alert-dismissible" role="alert">
            <div>Message sent successfully!</div>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        </div>
      )}

      <h1 className="mt-5">Contact Me</h1>
      <p className="text-center mt-5">Please fill out the form below to contact me.</p>

      {/* the react form described above and attaching the control functions */}
      <div className="d-flex justify-content-center my-3">
        <form className="form needs-validation" ref={form} onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="mb-3 form-floating">
            <input
              className="form-control"
              id="floatingInput"
              type="text"
              name="user_name"
              placeholder="Name"
              // destructuring the individual field value
              {...register("name", {
                required: true,
              })}
              // onBlur validate this field is not empty
              onBlur={() => onBlur("name")}
            />
            <label htmlFor="floatingInput">Name:</label>
          </div>
          {/* if the field is empty onBlur then display this error message */}
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
                // validate the email is a valid pattern
                pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              })}
              onBlur={() => onBlur("user_email")}
            />
            <label htmlFor="floatingInput">Email:</label>
          </div>
          {/* two error messages, one for an empty field and one for an invalid format */}
          {errors.user_email && errors.user_email.type === "required" && <p className="errorMsg">Email is required.</p>}
          {errors.user_email && errors.user_email.type === "pattern" && <p className="errorMsg">Email is not valid.</p>}

          <div className="form-floating">
            <textarea
              rows={3}
              className="form-control h-100"
              name="message"
              placeholder="  Message"
              {...register("message", {
                required: true,
              })}
              onBlur={() => onBlur("message")}
            />
            <label htmlFor="floatingInput">Message: </label>
          </div>
          {/* similar to validation on the other fields */}
          {errors.message && errors.message.type === "required" && <p className="errorMsg">Message is required.</p>}

          {/* submission button with some custom css for animation and styling */}
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
