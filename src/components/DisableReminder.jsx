import React from 'react';
import { ReminderContext } from './Context.jsx';

function DisableReminder() {
  let { logout } = React.useContext(ReminderContext);
  var reminderData = JSON.parse(localStorage.getItem('reminder'));
  const [id, setID] = React.useState(null);
  const [data, setData] = React.useState({
    date: '',
    subject: '',
  });
  function fillData(value, type) {
    if (value !== 'null') {
      if (type === 'date') {
        setData((prev) => {
          return { ...prev, date: value };
        });
      }
      if (type === 'subject') {
        setData((prev) => {
          return { ...prev, subject: value };
        });
      }
      if (type === 'reminder') {
        if (value !== 'null') setID(value);
      }
    }
    return;
  }
  function SubmitReminder() {
    if (!(data.date || data.description || data.subject)) {
      alert('Select Date, Subject, and Description properly.');
      return;
    }
    reminderData[id].enable = false;
    reminderData[id].subject = data.subject;
    reminderData[id].date = data.date;
    localStorage.setItem('reminder', JSON.stringify(reminderData));
    window.location.href = '/thank-you';
    return;
  }

  return (
    <>
      <div
        style={{
          width: '100%',
          height: '80vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: '80%',
            height: '80%',
            textAlign: 'center',
          }}
        >
          <h3>Disable a Appointment</h3>
          <br />

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '25px',
              textAlign: 'start',
            }}
          >
            <label htmlFor="date">Select a Date : </label>
            <input
              type="date"
              onChange={(e) => fillData(e.target.value, 'date')}
              name="date"
            />
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '25px',
            }}
          >
            <label htmlFor="subject">Select a Subject : </label>
            <select
              name="subject"
              onChange={(e) => fillData(e.target.value, 'subject')}
            >
              <option value="null">--Select--</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
            </select>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '25px',
            }}
          >
            <label htmlFor="subject">Select Appointment : </label>
            <select
              name="reminder"
              onChange={(e) => fillData(e.target.value, 'reminder')}
            >
              <option value="null">--Select--</option>
              {reminderData.map((data, idx) => {
                return <option value={idx}>{data.description}</option>;
              })}
            </select>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '25px',
            }}
          >
            <label htmlFor="description">Description : </label>
            <textarea
              disabled
              type="text"
              value={id ? reminderData[id].description : 'Select Appointment'}
              name="description"
            />
          </div>

          <div
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <button
              type="submit"
              onClick={SubmitReminder}
              style={{ padding: '5px', marginTop: '10px' }}
            >
              Confirm
            </button>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginTop: '10px',
            }}
          >
            <a href="/home">Back</a>
            <button type="submit" onClick={logout} style={{ padding: '3px' }}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default DisableReminder;
