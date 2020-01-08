import React from "react";
// import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function CreatePDF(props) {
  return (
    <span className="btn btn-success" {...props} role="button" tabIndex="0">
      Create PDF
    </span>
  );
}

export default CreatePDF;
