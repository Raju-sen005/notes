import React from "react";

const Alert = (props) => {
  const capitalize = (word) => {
    if (word === "danger") {
      word = "Error";
    } else {
      word = word.charAt(0).toUpperCase() + word.slice(1);
    }
    return word;
  };
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
      )}
    </div>
  );
};

export default Alert;
