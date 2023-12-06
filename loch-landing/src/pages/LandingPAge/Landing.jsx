import React, { useState } from "react";
import TypoBadge from "../../components/TypoBadge/TypoBadge";
import BellIcon from "../../assets/icons/BellIcon.svg";
import EyeIcon from "../../assets/icons/Eye.svg";
import VectorIcon from "../../assets/icons/Vector.svg";
import Carousel from "../../components/Carousel/Carousel";
import {
  descriptiveTypoOne,
  descriptiveTypoTwo,
  headingTypoOne,
  headingTypoTwo,
} from "../../assets/constants/constants";
import Cohort from "../../assets/images/Cohorts 1.jpg";
import Testimonials from "../../components/Testimonials/Testimonials";

function Landing() {
  const [email, setemail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const handleChange = (e) => {
    setemail(e?.target?.value);
    validateEmail();
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(email));
  };

  const handleRedirect = () => {
    window.location.href = "https://app.loch.one/welcome";
  };
  return (
    <div className={"hero-container-landing-page"}>
      <section className={"adv-hero-container"}>
        <div className={"section-1"}>
          <TypoBadge
            Icon={BellIcon}
            headingText={headingTypoOne}
            descriptiveText={descriptiveTypoOne}
          />
          <Carousel isTestimonial={false} />
        </div>
        <div className={"section-1"}>
          <img className={"img-sec-2"} src={Cohort} alt={"img-tag-1"} />
          <TypoBadge
            isAlignRight={true}
            Icon={EyeIcon}
            headingText={headingTypoTwo}
            descriptiveText={descriptiveTypoTwo}
          />
        </div>
        <div className={"section-2"}>
          <section className={"text-header fw-500"}>Testimonials</section>
        </div>
        <div className="line-element"></div>
        <div className={"section-3"}>
          <img src={VectorIcon} alt={"vector"} />
          <Carousel isTestimonial={true} />
        </div>
      </section>
      <section className={"signup-container"}>
        <div className={"hero-sig-container"}>
          <div className={"signup-header-txt"}>
            Sign up for exclusive access.
          </div>{" "}
          <input
            type={"email"}
            value={email}
            onChange={handleChange}
            className={"signup-input"}
          />
          {!isValidEmail && (
            <div className="error-msg">Invalid Email address !!</div>
          )}
          <button className={"signup-button"} onClick={handleRedirect}>
            Get Started
          </button>
          <div className={"signup-down-txt"}>
            You’ll receive an email with an invite link to join.
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
