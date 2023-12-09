import { useState } from "react";
import "./CustomAlert.scss"; // Import your styles
import { IoClose } from "react-icons/io5";

// @message:String a message to show in alert modal
// @onClose:Function() a function that set state into Boolean value, Boolean value will be true
//                      when clicked on custom Button, false when clicked button in modal.

const CustomAlert = ({ message, onClose }) => {
  return (
    <div className="custom-alert-overlay">
      <div className="custom-alert">
        <button onClick={onClose}><IoClose size={25}/></button>
        <h1>YOU'VE REACHED THE MAX</h1>
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CustomAlert;