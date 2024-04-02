import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="ui fixed menu">
      <div className="ui container center" onClick={handleClick}>
        <h2 style={{ cursor: "pointer" }}>FakeShop</h2>
      </div>
    </div>
  );
};

export default Header;
