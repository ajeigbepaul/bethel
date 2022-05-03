import React from "react";
import styles from "../../styles/Home.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
function Footer() {
  return (
    <footer className="w-full h-auto md:h-[100vh] bg-violet-500">
      <div className="w-full h-auto md:h-[90vh] md:flex">
        <div className=" h-40 md:w-[15%] w-3/5 flex flex-col items-center justify-center md:ml-20 mx-auto">
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            {" "}
            <span className={styles.logo}>
              <Image
                src="/Betheldigitechlogo.jpg"
                alt="Vercel Logo"
                width={50}
                height={35}
              />
            </span>
            <h2 className="font-bold">ABOUT AGENCY</h2>
          </a>
          <div className="flex justify-between items-center w-[50%]">
            <FaFacebookF className="w-8 h-8 cursor-pointer hover:text-fuchsia-400" />
            <FaInstagram className="w-8 h-8 cursor-pointer hover:text-fuchsia-400" />
            <FaLinkedin className="w-8 h-8 cursor-pointer hover:text-fuchsia-400" />
          </div>
        </div>

        <div className="md:w-[20%] w-4/5 mx-auto md:h-40 h-auto  p-4 bg-slate-200 md:bg-inherit rounded-t-md">
          <h2 className="mb-7 md:ml-8 text-center text-sm font-semibold text-black md:text-white">
            GENERAL ENQUIRY
          </h2>
          <div className="flex items-center justify-center flex-col space-y-2 text-xs md:text-sm">
            <div className="flex items-center justify-center w-full bg-fuchsia-400">
              <span className="w-[85%] flex items-center justify-center">
                <MdEmail className="mx-2" />
                info@betheldigitech.com
              </span>
            </div>
            <div className="flex items-start justify-center w-full">
              <span className="w-[90%] flex items-start justify-center">
                <FaPhoneAlt className="mx-2" />
                Canada: +16475588701
              </span>
            </div>
            <div className="flex items-start justify-center w-full">
              <div className="w-[10%]">{/* <FaPhoneAlt /> */}</div>
              <span className="w-[90%] flex items-start justify-center">
                USA: +13476376992
              </span>
            </div>
            <div className="flex items-start justify-center w-full">
              <div className="w-[10%]">{/* <FaPhoneAlt /> */}</div>
              <span className="w-[85%] flex items-start justify-center">
                U.K.: +442045770014
              </span>
            </div>
            <div className="flex items-start justify-center w-full">
              <div className="w-[10%]">{/* <FaPhoneAlt /> */}</div>
              <span className="w-[85%] flex items-start justify-center">
                Ireland: +35315135570
              </span>
            </div>
          </div>
        </div>
        <div className="md:w-[20%] w-4/5 mx-auto md:h-40 h-auto bg-slate-200 text-xs md:text-sm md:bg-inherit p-4 mt-3 md:mt-0">
          <h2 className="md:ml-24 text-center  mb-7 text-sm font-semibold text-black md:text-white">
            LINKS
          </h2>
          <div>
            <ul className="flex items-center justify-center flex-col md:ml-24 space-y-2">
              <a href="#">
                <li className="hover:text-fuchsia-400">Home</li>
              </a>
              <a href="#">
                <li className="hover:text-fuchsia-400">About</li>
              </a>
              <a href="#">
                <li className="hover:text-fuchsia-400">Career</li>
              </a>
              <a href="#">
                <li className="hover:text-fuchsia-400">Contact us</li>
              </a>
              <a href="#">
                <li className="hover:text-fuchsia-400">Work Placement</li>
              </a>
            </ul>
          </div>
        </div>
        <div className="md:w-[35%] w-4/5 mx-auto md:h-40 h-auto p-4">
          <h2 className="text-center mb-7 text-sm font-semibold text-white">
            CONTACT US
          </h2>
          <div className={styles.letstalk}>
            <form className={styles.letstalk__form}>
              <div className={styles.formcontrol}>
                <label>Name</label>
                <input type="text" className={styles.form__input} />
              </div>
              <div className={styles.formcontrol}>
                <label>Email</label>
                <input type="email" className={styles.form__input} />
              </div>
              <div className={styles.formcontrol}>
                <label>Message</label>
                <textarea rows="5" cols="10" />
              </div>
              <div className="bg-fuchsia-400 flex items-center justify-center p-2 font-semibold text-[#06102c] cursor-pointer hover:bg-fuchsia-500">
                <input type="submit" value="send" className="cursor-pointer" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full h-[10vh]"></div>
    </footer>
  );
}

export default Footer;
