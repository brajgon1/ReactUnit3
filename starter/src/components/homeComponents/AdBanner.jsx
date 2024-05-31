import React from "react";
import salmon from "../../assets/salmon.jpg";
import { Link } from "react-router-dom";

const AdBanner = () => {
  return (
    <div
      style={{
        background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.8)),
          url(${salmon})`,
        backgroundSize: "cover",
        height: "30vh",
        width: "100%",
        position: "relative",
        color: "white",
        padding: "10px",
        backgroundRepeat: "no-repeat"

      }}
    >
      <div
      style={{
        position: "absolute",
        top: "0",
        left: "50%",
        transform: "translate(-50%, 0)",
        textAlign: "center",
        width: "100%",
        padding: "10px",
        color: "white",
        backgroundSize: "cover",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.8)",
        zIndex: "100",
      }}
      >
        <div className="content-word">
        <h3>New Recipe</h3>
        <h1 className="pineapple-title">Pineapple Salmon</h1>
        <h3>
          This recipe consists of fresh wild Alaskan salmon, rubbed in a bbq
          brown sugar rub, baked for 25 minutes on a bed of pineapple, and garnished in butter, garlic, and chives. You won’t want to miss it!
        </h3>
        </div>
        <Link to="/recipe/3">
          <button className="blue-btn">Check it out</button>
        </Link>
      </div>
    </div>
  );
};

export default AdBanner;
