import React from "react";

function NotificationCard({
  icon,
  isrightElementIcon,
  rightElement,
  children,
}) {
  return (
    <div className={"notification-card-container"}>
      <div className={"notification-card-header"}>
        <img src={icon} alt={"icon1"} />
        {isrightElementIcon ? (
          <img src={rightElement} alt={"icon1"} />
        ) : (
          <div>{rightElement}</div>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
}

export default NotificationCard;
