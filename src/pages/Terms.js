import React from "react";
import { Link } from "react-router-dom";
export default function Terms(props) {
  return (
    <div>
      <h1 style={{ marginInline: "30px" }}>Terms and Conditions</h1>
      <div className="container">
        <b>Introduction</b>
        <p>
          Welcome to website. By using our website [URL: www.{props.title}.com]
          and services,you agree to comply with these Terms & Conditions. if you
          do not agree,please do not use our website.
        </p>
        <b>Booking & Payment Policy</b>
        <ul>
          <li>
            User must provide accurate personal details while booking tickets.
          </li>
          <li>
            Booking confirmation will be sent via email after successful
            payment.
          </li>
          <span>We accept the following payment methods:</span>
          <div className="fl" style={{width: "20%"}}>
            {" "}
            &#9989;Credit/Debit Cards &#9989;Net Banking &#9989;UPI(Google Pay,
            Phone Pay, Paytm, etc.) &#9989;Digital Wallets
          </div>
          <li>Prices are subject to change without prior notice</li>
          <li>
            Additional service charges,taxes and convenience fees may be
            applicable.
          </li>
          <li>
            User can cancel tickets based on the specific rules of the
            respective airline/bus/train service.
          </li>
          <li>Last minutes cancellations may not be eligible for refunds.</li>
          <li>Convenience fees are non-refundable</li>
          <li>
            Date and time changes are allowed as per service provider policies.
          </li>
          <li>Name changes on tickets are subject to approval.</li>
          <li>User must not make fraudulent bookings.</li>
          <li>Duplicate accounts or misuse of promo codes is prohibited.</li>
          <li>
            We collect user data (name, email, phone, payment details) for
            booking purposes.
          </li>
          <li>
            We do not share personal information with third parties without user
            consent
          </li>
          <li>These terms are governed by the lows of India.</li>
          <b>Customer Support & Contact Information</b>
          <span>For queries or complaints,contact us at:</span>
          <div className="dl">
          <p>&#128231; Email: <Link to="/">ticketbooking@gmail.com</Link></p>
          <p>&#9742; Phone: +91 XXXXXXXXXX </p>
          <p>&#9200; Support Hours: [9AM-9PM IST]</p>
          </div>
        </ul>
      </div>
    </div>
  );
}
