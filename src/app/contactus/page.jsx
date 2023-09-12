"use client";

import React from "react";
import styles from "./page.module.css";
import Form from "@/compenents/Forms/Form";
import { FaArrowDown } from "react-icons/fa";
import shape1 from "../../../public/shapes/1st.png";
import shape2 from "../../../public/shapes/2nd.png";
import shape3 from "../../../public/shapes/3rd.png";
import { useEffect } from "react";
import Image from "next/image";

function page() {
  useEffect(() => {
    const logospan = document.querySelectorAll(`.${styles.logo}`);
    const intro = document.querySelector(`.${styles.intro}`);

    setTimeout(() => {
      logospan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.add(styles.active);
        }, (idx + 1) * 400);
      });

      setTimeout(() => {
        logospan.forEach((span, idx) => {
          setTimeout(() => {
            span.classList.remove(styles.active);
            span.classList.add(styles.fade);
          }, (idx + 1) * 50);
        });
      }, 2000);

      setTimeout(() => {
        intro.style.top = "-100vh";
      }, 2300);
    }, 0);

    return () => {};
  }, []);
  const iconStyle = {
    strokeWidth: "1px", // Adjust the stroke width as needed
  };
  return (
    <div className={styles.main}>
      <div className={styles.intro}>
        <span className={styles.logo}>
          <Image src={shape1} alt="logo" className={styles.s1} />
          <Image src={shape2} alt="logo" className={styles.s2} />
          <Image src={shape3} alt="logo" className={styles.s3} />
        </span>
      </div>
      <div className={styles.container}>
        <div className={styles.namings}>
          <p className={styles.contact}>Contact Us</p>
          <p className={styles.askings}>
            Questions? Feedback?
            <br /> Product ideas?
            <br />
            <br />
            <span>Write to us</span>
          </p>
          <p className={styles.askings}>puru@purusenterprises.in</p>
          <p className={styles.askings}>+91 9967760336</p>
          <div className={styles.circle}>
            <FaArrowDown style={iconStyle} />
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
}

export default page;
