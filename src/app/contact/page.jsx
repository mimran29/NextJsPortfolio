"use client"

import React from "react";
import {useRef} from "react";
import styles from "./page.module.css";
import Image from "next/image";
import emailjs from "@emailjs/browser";


const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_izq9kwm', 'template_5e2ruoc', form.current, 'Lcr1pMpFaFqZenmgB')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <input type="text" name="name" placeholder="name" className={styles.input} />
          <input type="text" name="user_email" placeholder="your email" className={styles.input} />
          <textarea
            className={styles.textArea}
            name="message"
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit" className={styles.btn}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
