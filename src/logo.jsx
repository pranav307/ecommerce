import React from "react";

const Logo = () => {
  // Inline styles for the image
  const logoStyle = {
    // Ensure the image is treated as a block-level element
    margin: "0 auto", // Center the image horizontally
    width: "50px", // Set a maximum width to prevent it from being too large
    height: "50px", // Maintain the aspect ratio of the image
  };

  return <img src="./public/OIP.jpg" alt="Logo" style={logoStyle} />;
};

export default Logo;
