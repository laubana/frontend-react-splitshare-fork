import React from "react";

const ProfileSVG = ({ width = 19, height = 22, fill, stroke, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width} //19
      height={height} //22
      fill="none"
      viewBox="0 0 19 22"
    >
      <path
        fill={fill}
        d="M14.93 14.87l-.563.826a1 1 0 00.563.173v-1zm-5.26-1.64l.043-1a.968.968 0 00-.086 0l.043 1zm-5.26 1.64l.564.825.001-.001-.565-.825zm-2.95 5.79l-.999-.047a1 1 0 00.999 1.046v-1zm16.43 0v1a1 1 0 00.999-1.05l-.999.05zm-2.95-5.79l.565-.826a1 1 0 00-.565-.175v1zm-1.57-8.46a3.71 3.71 0 01-3.71 3.71v2a5.71 5.71 0 005.71-5.71h-2zm-3.71 3.71a3.71 3.71 0 01-3.71-3.71h-2a5.71 5.71 0 005.71 5.71v-2zM5.95 6.41A3.71 3.71 0 019.66 2.7v-2a5.71 5.71 0 00-5.71 5.71h2zM9.66 2.7a3.71 3.71 0 013.71 3.71h2A5.71 5.71 0 009.66.7v2zm5.833 11.343c-2.74-1.867-5.328-1.793-5.78-1.813l-.086 1.998c.468.02 2.52-.045 4.74 1.468l1.126-1.653zM9.627 12.23c-.448.02-3.04-.065-5.782 1.814l1.13 1.65c2.218-1.52 4.266-1.445 4.738-1.466l-.086-1.998zm-5.78 1.813c-1.642 1.12-2.476 2.804-2.902 4.123a10.973 10.973 0 00-.467 2.229 6.176 6.176 0 00-.017.215v.002l.999.047a161.788 161.788 0 01.999.047v-.001a1.818 1.818 0 01.01-.124 8.975 8.975 0 01.379-1.8c.356-1.105.997-2.316 2.126-3.086l-1.128-1.652zM1.46 21.66h16.43v-2H1.46v2zm16.43-1c.999-.048.999-.049.999-.05v-.002-.005l-.001-.014-.003-.044a9.26 9.26 0 00-.08-.676 11.036 11.036 0 00-.404-1.703c-.427-1.318-1.26-3-2.896-4.12l-1.13 1.65c1.124.77 1.766 1.981 2.124 3.086a9.05 9.05 0 01.382 1.803l.009.102.001.021v.002l.999-.05zm-2.95-6.79h-.01v2h.01v-2z"
      ></path>
    </svg>
  );
};

export default ProfileSVG;