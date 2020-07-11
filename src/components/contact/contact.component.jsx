import React, { useState } from "react";
import "./contact.styles.scss";
import { useSetRecoilState } from "recoil";
import { Waypoint } from "react-waypoint";
import { activeSectionState } from "../../atoms/activeSectionState";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const setActiveSection = useSetRecoilState(activeSectionState);

  const { register, errors, handleSubmit, getValues } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  let templateParams = {
    from_name: getValues("email"),
    to_name: "user_csdQtDEEHHEjrSfmMfk8Rz",
    name: getValues("name"),
    message_html: getValues("message"),
  };

  const onSubmit = (data) => {
    console.log(data);
    console.log(templateParams);
    emailjs
      .send(
        "gmail",
        "template_7Y1aKv5g",
        templateParams,
        "user_csdQtDEEHHEjrSfmMfk8R"
      )
      .then(
        (result) => {
          toast(result.text);
        },
        (error) => {
          toast(error.text)
        }
      );
  };


  return (
    <>
      <section
        id="contact"
        className="bg-primary flex items-center justify-center flex-wrap text-primary"
      >
        <Waypoint onEnter={() => setActiveSection("contact")} />
        <div className="container flex flex-col m-auto pt-20 pb-0 px-4 lg:px-20">
          <h2 className="text-secondary mb-10 lg:mb-0 text-3xl">
            <span className="border-b-2 border-quartary">Contact Me</span>
          </h2>
        </div>
        <div className="container flex flex-col m-auto pt-20 pb-10 px-4 lg:px-20">
          <div className="w-full mx-auto max-w-3xl bg-dark rounded-lg shadow p-8 text-gray-700 border border-gray-700">
            <form onSubmit={handleSubmit(onSubmit)} className="text-secondary">
              <div className="flex flex-wrap mb-6">
                <div className="relative w-full appearance-none label-floating">
                  <input
                    name="email"
                    ref={register({ required: true })}
                    className="bg-primary tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full border border-gray-700 rounded focus:outline-none focus:border-gray-500"
                    id="email"
                    type="email"
                    placeholder="Your email"
                    required
                  />
                  <label
                    htmlFor="name"
                    className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
                  >
                    Your name
                  </label>
                  {errors.email && "Email is required"}
                </div>
              </div>
              <div className="flex flex-wrap mb-6">
                <div className="relative w-full appearance-none label-floating">
                  <input
                    name="name"
                    ref={register({ required: true })}
                    className="bg-primary tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full border border-gray-700 rounded focus:outline-none focus:border-gray-500"
                    id="name"
                    type="text"
                    placeholder="Your name"
                    required
                  />
                  <label
                    htmlFor="name"
                    className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
                  >
                    Your name
                  </label>
                  {errors.name && "Name is required"}
                </div>
              </div>
              <div className="flex flex-wrap mb-6">
                <div className="relative w-full appearance-none label-floating">
                  <input
                    className="bg-primary autoexpand tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full border border-gray-700 rounded focus:outline-none focus:border-gray-500"
                    type="text"
                    name="message"
                    placeholder="Message..."
                    ref={register({ required: true })}
                  />
                  <label
                    htmlFor="message"
                    className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
                  ></label>
                  {errors.message && "message is required"}
                </div>
              </div>
              <div
                className={`mb-6 gcaptcha ${
                  getValues("email") ? `` : `hidden`
                }`}
              >
                <div
                  className="g-recaptcha"
                  data-sitekey="6LetJbAZAAAAAKhIDCmYzsQ5i2jTd4iRBKfKIjn_"
                ></div>
              </div>
              <input
                className="w-full shadow bg-quartary focus:outline-none font-bold py-2 px-4 rounded text-primary border-gray-700"
                type="submit"
                value="Send"
              />
            </form>
            <ToastContainer />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
