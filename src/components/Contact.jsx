import React, { useRef, useState } from 'react'
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Contact() {
  const form=useRef();
  const [isSent,setIsSent]=useState(false);
  const inputClass =
    "rounded-md p-3 md:p-4 dark:bg-purple-600 bg-pink-300 placeholder-black/70 focus:outline-none focus:ring dark:focus:ring-purple-300 focus:ring-pink-500 ring-offset-1 dark:text-white text-black";
    const sendEmail=(e)=>{
      e.preventDefault();
      emailjs
        .sendForm(
          "service_oneebfk",
          "template_uhnij4p",
          form.current,
          "eT1cIO3WzdB_sQKMB"
        )
        .then(
          () => {
            setIsSent(true);
            form.current.reset(); // Reset form fields after sending
            toast.success("Message sent successfully! ✅", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: "colored",
            });
          },
          (error) => {
            console.error("Error sending message:", error);
            toast.error("Failed to send message. Please try again.", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: "colored",
            });
          }
        );
    }
  return (
    <div>
      <ToastContainer/>
      <div className="w-[70%] sm:w-[30vw] mx-auto anim">
        <h2
          className={`mx-auto text-3xl sm:text-5xl font-bold flex justify-center intems-center mt-[6rem] underline dark:decoration-purple-400 decoration-pink-400 underline-offset-5`}
        >
          CONTACT
        </h2>
        <div className="mx-auto mt-[5rem] ">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col md:p-[3rem] p-[1.5rem] gap-3 md:gap-[1.6rem] border rounded-md dark:border-purple-400 border-pink-500 shadow-lg dark:shadow-purple-400 shadow-pink-300">
            <p className="text-2xl md:text-3xl mx-auto font-semibold">
              Connect With Me 🚀
            </p>
            <input className={inputClass} placeholder="Your Email" name="email"></input>
            <input className={inputClass} placeholder="Your Name" name="name"></input>
            <input className={inputClass} placeholder="Subject" name="subject"></input>
            <textarea
              className={inputClass} name="message"
              placeholder="Write your message here.."
              rows={"4"}
            ></textarea>
            <button
              type="submit"
              className="rounded-md p-3 bg-gradient-to-r dark:from-purple-500 dark:to-purple-900 from-pink-400 to-pink-700"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact