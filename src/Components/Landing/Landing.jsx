import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <div>
        <Link to="/home">
          <button>Start!</button>
        </Link>
      </div>
    </div>
  );
};
export default LandingPage;
