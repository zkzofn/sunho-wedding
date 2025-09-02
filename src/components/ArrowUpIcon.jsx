import React from "react";

const ArrowUpIcon = ({ strokeColor = "#3F2222", width = 18, height = 19 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5 11.7559L9 7.25586L4.5 11.7559"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowUpIcon;
