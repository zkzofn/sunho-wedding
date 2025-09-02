import React from "react";

const ArrowDownIcon = ({
  strokeColor = "#3F2222",
  width = 18,
  height = 19,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 7.25586L9 11.7559L13.5 7.25586"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowDownIcon;
