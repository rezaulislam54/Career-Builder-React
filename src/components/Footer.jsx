import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-base-200">
      <footer className="footer text-base-content p-10 max-w-[1024px] mx-auto px-4 md:px-0">
        <aside>
          <img
            className="w-52 mb-3"
            src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1726224908/careerbuilder-logo_imilgv.png"
            alt=""
          />
          <p>
            There are many variations of passages <br /> of Lorem Ipsum , but
            the majority have <br /> suffered alteration in some form.
          </p>
          <div className="flex gap-3 text-2xl">
            <BsFacebook />
            <FaTwitter />
            <IoLogoInstagram />
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
