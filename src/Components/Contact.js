import React, { useState } from "react";
import Heading from "./Heading";
import { AiFillGithub, AiFillLinkedin } from "react-icons/Ai";
import { IoMdMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import axios from "axios";

const Contact = () => {
  const [isLoader, setIsLoader] = useState(false);
  let links = [
    {
      index: 0,
      title: "github.com/Harshitpahuja20",
      logo: <AiFillGithub />,
      href: "https://github.com/Harshitpahuja20",
    },
    {
      index: 1,
      title: "linkedin.com/in/harshit202004",
      logo: <AiFillLinkedin />,
      href: "https://www.linkedin.com/in/harshit202004",
    },
    {
      index: 2,
      title: "harshitpahuja953@gmail.com",
      logo: <IoMdMail />,
      href: "mailto:harshitpahuja953@gmail.com",
    },
    {
      index: 3,
      title: "+91 98121-58121",
      logo: <BsFillTelephoneFill />,
      href: "",
    },
  ];

  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, email, subject, message } = values;
  const onchange2 = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // const emailFunc = (e) => {
  //   try {
  //     e.preventDefault();

  //     if (name && email && message) {
  //       const config = {
  //         SecureToken: "7f14dc90-017a-4861-a0ff-8078c6aa35f2",
  //         From: "harshitpahuja953@gmail.com",
  //         To: "nonupahuja112@gmail.com",
  //         Subject: "Message from Portfolio",
  //         Body: { name, email, subject, message },
  //       };

  //       if (window.Email) {
  //         window.Email.send(config).then(() => {
  //           alert("Message Sent");
  //         });
  //       } else {
  //         alert("Something went wrong");
  //       }
  //     } else {
  //       alert("Fill in all the information first");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const sendmsg = async (e) => {
    e.preventDefault();
    if (name && email && message) {
      setIsLoader(true);
      await axios({
        method: "POST",
        url: "https://protfolio-4fis.onrender.com/sendMessage",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          name: name,
          email: email,
          message: message,
          subject: subject,
        },
      })
        .then((res) => {
          if (res.status) {
            setIsLoader(false);
            alert("message sent successfully");
          } else {
            setIsLoader(false);
            alert("Something went wrong");
          }
        })
        .catch((err) => {
          setIsLoader(false);
          alert("Something went wrong");
          console.log(err);
        });
    } else {
      alert("firstly , complete the form to send message");
    }
  };

  return (
    <div id="contact">
      <div>
        <Heading heading={"Contact me"} text={"Get in touch"} />
        <div className="contact_container">
          <div className="contact_left">
            <h5>Get in touch</h5>
            <ul>
              {links?.map(({ title, logo, href, index }) => {
                return (
                  <div key={index} className="contact_links">
                    <span>{logo}</span>
                    <span>
                      <a href={href} target="_blank">
                        {title}
                      </a>
                    </span>
                  </div>
                );
              })}
            </ul>
          </div>
          <div className="contact_right">
            <h5>Message me</h5>
            <div className="skill_col">
              <form onSubmit={sendmsg}>
                <div className="form_name">
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    name="name"
                    onChange={onchange2}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    name="email"
                    onChange={onchange2}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  value={subject}
                  name="subject"
                  onChange={onchange2}
                />
                <textarea
                  type="text"
                  placeholder="Message..."
                  value={message}
                  name="message"
                  onChange={onchange2}
                />
                <div className="send_btn">
                  {!isLoader ? (
                    <button type="submit" className="btn small btn-primary">
                      Send message
                    </button>
                  ) : (
                    <button class="btn btn-primary" type="button" disabled>
                      <span
                        class="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Sending...
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
