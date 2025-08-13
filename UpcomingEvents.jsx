import React, { useState } from "react";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState("");
  const [eventDate, setEventDate] = useState("");

  const addEvent = () => {
    if (newEvent.trim() && eventDate) {
      setEvents([...events, { name: newEvent, date: eventDate }]);
      setNewEvent("");
      setEventDate("");
    }
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>📅 Upcoming Events</h3>
      <div style={styles.form}>
        <input
          style={styles.input}
          type="text"
          placeholder="Event name..."
          value={newEvent}
          onChange={(e) => setNewEvent(e.target.value)}
        />
        <input
          style={styles.input}
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        />
        <button style={styles.button} onClick={addEvent}>
          ➕ Add
        </button>
      </div>
      <ul style={styles.list}>
        {events.map((event, index) => (
          <li key={index} style={styles.listItem}>
            <strong>{event.name}</strong> — {event.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  title: {
    fontSize: "18px",
    marginBottom: "15px",
  },
  form: {
    display: "flex",
    gap: "8px",
    marginBottom: "15px",
    flexWrap: "wrap",
  },
  input: {
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    flex: "1",
    minWidth: "120px",
  },
  button: {
    padding: "8px 12px",
    backgroundColor: "#4f46e5",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: "0",
  },
  listItem: {
    padding: "8px 0",
    borderBottom: "1px solid #eee",
  },
};

export default UpcomingEvents;
