import React from "react";

function Testimonials({ heading1, heading2, desc }) {
  return (
    <div className={"testimonial-hero-container"}>
      <section className={"testimonial-heading"}>
        <span className={"text-test-1"}>{heading1}</span>
        <span className={"text-test-2"}>{heading2}</span>
      </section>
      <section className={"testimonial-desc"}>{desc}</section>
    </div>
  );
}

export default Testimonials;
