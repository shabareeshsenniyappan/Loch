import React from "react";

export default function TypoBadge({
  Icon,
  headingText,
  descriptiveText,
  isAlignRight,
}) {
  return (
    <div
      className={`typo-badge-container ${isAlignRight && "text-align-right"}`}
    >
      <img
        src={Icon}
        alt="Bell Icon"
        className={`icon-regulaiser ${isAlignRight && "icon-on-right"}`}
      />
      <section className={"text-header fw-500"}>{headingText}</section>
      <section className={"text-descrption fw-500"}>{descriptiveText}</section>
    </div>
  );
}
