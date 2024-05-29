import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

function UserPopup2({ className }) {
  return (
    <div
      className={`w-[200px] h-[100px] absolute top-[210px] sm:top-[165px] sm:right-[9%] ${className}`}
    >
      <Link to="/sign-up">
        <Button
          text="Sign Up"
          className="w-full h-1/2  bg-white transition-all hover:bg-primary hover:text-white text-primary font-regular border border-[#F0F0F0]"
        />
      </Link>
      <Link to={`/login`}>
        <Button
          text="Log In"
          className="w-full h-1/2  bg-white transition-all hover:bg-primary hover:text-white text-primary font-regular border border-[#F0F0F0]"
        />
      </Link>
    </div>
  );
}

export default UserPopup2;
