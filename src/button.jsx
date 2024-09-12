import React from "react";

function Button({
  children, // Corrected "Children" to "children" (React convention)
  type = "button",
  className = "",
  ...props
}) {
  return (
    <button type={type} className={className} {...props}>
      {children} {/* Corrected "Children" to "children" */}
    </button>
  );
}

export default Button;
