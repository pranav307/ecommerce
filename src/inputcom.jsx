import React, { useId } from "react";
import "./inputbutton.css";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label className="inline-block" htmlFor={id}>
          {label}
        </label>
      )}
      <input type={type} className={``} ref={ref} {...props} id={id} />
    </div>
  );
});
export default Input;
