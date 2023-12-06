import React, { useState, useRef, useEffect } from "react";
import "./Carousel.css"; // Add your CSS styles for the carousel
import Slider from "infinite-react-carousel";
import NotificationCard from "../../components/NotificationCard/NotificationCard";
import Bell from "../../assets/icons/bell.svg";
import Bar from "../../assets/icons/bar-chart-2.svg";
import CheckMarks from "../../assets/icons/Checkmark.svg";
import Clock from "../../assets/icons/clock.svg";
import Testimonials from "../Testimonials/Testimonials";

const Notification1 = (
  <div className={"align-center"}>
    <div className={"txt-500-14"}>
      We’ll be sending notifications to you here
    </div>
    <input className={"input-notify-card"} type={"text"} />
  </div>
);

const Notification1Left = <div>Save</div>;

const Notification2 = (
  <div className={"align-center"}>
    <div className={"txt-500-14"}>
      Notify me when any wallets move more than
    </div>
    <select className={"select-option-noti"}>
      <option selected={true}>$1000.00</option>
    </select>
  </div>
);

const Notification3 = (
  <div className={"align-center"}>
    <div className={"txt-500-14"}>Notify me when any wallet dormant for</div>
    <select className={"select-option-noti"}>
      <option selected={true}> {`> 30 days`}</option>
    </select>
    <div className={"txt-500-14 mt-10"}>becomes active</div>
  </div>
);
const Carousel = ({ isTestimonial }) => {
  let items1 = !isTestimonial
    ? [
        <NotificationCard
          icon={Bell}
          rightElement={Notification1Left}
          children={Notification1}
        />,
        <NotificationCard
          icon={Bar}
          isrightElementIcon={true}
          rightElement={CheckMarks}
          children={Notification2}
        />,
        <NotificationCard
          icon={Clock}
          isrightElementIcon={true}
          rightElement={CheckMarks}
          children={Notification3}
        />,
      ]
    : [
        <Testimonials
          heading1={"Jack F"}
          heading2={"Ex Blackrock PM"}
          desc={`“Love how Loch integrates portfolio analytics and whale watching into
    one unified app.”`}
        />,
        <Testimonials
          heading1={"Yash P"}
          heading2={"Research, 3poch Crypto Hedge Fund"}
          desc={`“I use Loch everyday now. I don't think I could analyze crypto whale trends markets it!”`}
        />,
        <Testimonials
          heading1={"Shiv S"}
          heading2={"Co-Founder Magik Labs"}
          desc={`“Managing my own portfolio is helpful and well designed. What’s really interesting .”`}
        />,
      ];

  let item2 = [
    <Testimonials
      heading1={"Jack F"}
      heading2={"Ex Blackrock PM"}
      desc={`“Love how Loch integrates portfolio analytics and whale watching into one unified app.”`}
    />,
    <Testimonials
      heading1={"Yash P"}
      heading2={"Research, 3poch Crypto Hedge Fund"}
      desc={`“I use Loch everyday now. I don't think I could analyze crypto whale trends markets it!”`}
    />,
    <Testimonials
      heading1={"Shiv S"}
      heading2={"Co-Founder Magik Labs"}
      desc={`“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”`}
    />,
  ];

  return (
    <Slider
      className={`${isTestimonial ? "carousel2" : "carousel1"}`}
      slidesToShow={isTestimonial ? 1.8 : 1.5}
      autoplay={isTestimonial ? false : true}
      arrows={false}
      rows={1}
      autoplaySpeed={1500}
      dots={false}
    >
      {...items1}
    </Slider>
  );
};

export default Carousel;
