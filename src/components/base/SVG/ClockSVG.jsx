import React from "react";

const ClockSVG = ({ width, height, fill, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill}
      {...props}
    >
      <path
        fill={fill}
        d="M10.98 4.36953C10.98 3.81725 10.5323 3.36953 9.98 3.36953C9.42771 3.36953 8.98 3.81725 8.98 4.36953H10.98ZM9.98 10.3495H8.98C8.98 10.701 9.16448 11.0266 9.46593 11.2073L9.98 10.3495ZM12.4359 12.9873C12.9097 13.2712 13.5238 13.1173 13.8077 12.6436C14.0917 12.1699 13.9378 11.5557 13.4641 11.2718L12.4359 12.9873ZM17.96 9.99953C17.96 14.4068 14.3872 17.9795 9.98 17.9795V19.9795C15.4918 19.9795 19.96 15.5113 19.96 9.99953H17.96ZM9.98 17.9795C5.57277 17.9795 2 14.4068 2 9.99953H0C0 15.5113 4.4682 19.9795 9.98 19.9795V17.9795ZM2 9.99953C2 5.5923 5.57277 2.01953 9.98 2.01953V0.0195312C4.4682 0.0195312 0 4.48773 0 9.99953H2ZM9.98 2.01953C14.3872 2.01953 17.96 5.5923 17.96 9.99953H19.96C19.96 4.48773 15.4918 0.0195312 9.98 0.0195312V2.01953ZM8.98 4.36953V10.3495H10.98V4.36953H8.98ZM9.46593 11.2073L12.4359 12.9873L13.4641 11.2718L10.4941 9.49178L9.46593 11.2073Z" 
      />
    </svg>
  );
};

export default ClockSVG;