import React, { useState } from "react";

export default function Booking() {
  const [Form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    Tickets:"1"
  });
  const doneChange = (event) => {
    setForm({ ...Form, [event.target.name]: event.target.value });
  };
  const doneSubmit = (event) => {
    event.preventDefault();
    alert(`Booking Confirmed!\nName:${Form.name}\nTickets:${Form.Tickets}`);
  };
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <div className="container" id="form" style={{ margin: "100px 0px" }}>
      <h1>Booking Form</h1>
      <form
        action=""
        onSubmit={doneSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "11px",
          margin: "auto",
        }}
      >
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={Form.name}
          onChange={(event) => {
            const capitalizedValue = capitalizeFirstLetter(event.target.value);
            doneChange({
              target: { name: event.target.name, value: capitalizedValue },
            });
          }}
          required
        />
        <label>E-mail:</label>
        <input
          type="email"
          name="email"
          value={Form.email}
          onChange={doneChange}
          required
        />
        <label>Phone:</label>
        <input
          type="tel"
          name="phone"
          value={Form.phone}
          onChange={doneChange}
          required
        />
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={Form.date}
          onChange={doneChange}
          required
        />
        <label>Tickets:</label>
        <input
          type="number"
          min="1"
          name="Tickets"
          value={Form.Tickets}
          onChange={doneChange}
          required
        />
        <button
          type="submit"
          style={{
            padding: "5px",
            margin: "30px",
            borderRadius: "1pc",
            background: "red",
            color: "white",
            border: "1px solid",
          }}
        >
          Book Now
        </button>
      </form>
    </div>
  );
}
