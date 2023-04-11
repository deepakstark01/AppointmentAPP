import React from 'react';
import { ReminderContext } from './Context.jsx';
function ModifyReminder() {
  let { logout,dataFrame } = React.useContext(ReminderContext);
  var reminderData = JSON.parse(localStorage.getItem('reminder'));
  const [id, setID] = React.useState(null);
  const [data, setData] = React.useState(dataFrame);

  function fillData(value, type) {
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
    if (type === 'description') {
      setData((prev) => {
        return { ...prev, description: value };
      });
    }
    if (type === 'contact') {
      setData((prev) => {
        return { ...prev, contact: value };
      });
    }
    if (type === 'sms') {
      setData((prev) => {
        return { ...prev, sms: value };
      });
    }
    if (type === 'recur') {
      setData((prev) => {
        return { ...prev, recur: value };
      });
    }
    if (type === 'reminder') {
      if (value === 'null') {
        setData(dataFrame);
        setID(null);
      } else {
        setID(value);
        setData((prev) => {
          return {
            ...prev,
            description: reminderData[value].description,
            contact: reminderData[value].contact,
            email: reminderData[value].email,
            sms: reminderData[value].sms,
            recur: reminderData[value].recur,
          };
        });
      }
    }
    return;
  }

  function SubmitReminder() {
    if (
      !(
        data.date ||
        data.email ||
        data.description ||
        data.subject ||
        data.contact ||
        data.sms
      )
    ) {
      alert('Fill Date, Subject, Email and Description properly.');
      return;
    }
    reminderData[id] = data;
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
          <h3>Modify a Appointment</h3>
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
                return (
                  <option key={idx} value={idx}>
                    {data.description}
                  </option>
                );
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
            <label htmlFor="description">Add Description : </label>
            <textarea
              type="text"
              onChange={(e) => fillData(e.target.value, 'description')}
              name="description"
              value={data.description}
            />
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '25px',
            }}
          >
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              onChange={(e) => fillData(e.target.value, 'email')}
              name="email"
              value={data.email}
            />
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '25px',
            }}
          >
            <label htmlFor="contact">Contact No. : </label>
            <input
              type="number"
              onChange={(e) => fillData(e.target.value, 'contact')}
              name="contact"
              value={data.contact}
            />
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '25px',
            }}
          >
            <label htmlFor="sms">SMS : </label>
            <input
              type="text"
              onChange={(e) => fillData(e.target.value, 'sms')}
              name="sms"
              value={data.sms}
            />
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '25px',
            }}
          >
            <label htmlFor="recur">Recur For Next : </label>
            <input
              type="radio"
              onChange={(e) => fillData(e.target.value, 'recur')}
              name="recur"
              value="7 days"
              checked={data.recur === '7 days' ? true : false}
            />
            <label htmlFor="7 days">7 Days</label>
            <input
              type="radio"
              onChange={(e) => fillData(e.target.value, 'recur')}
              name="recur"
              value="5 days"
              checked={data.recur === '5 days' ? true : false}
            />
            <label htmlFor="5 days">5 Days</label>
            <input
              type="radio"
              onChange={(e) => fillData(e.target.value, 'recur')}
              name="recur"
              value="3 days"
              checked={data.recur === '3 days' ? true : false}
            />
            <label htmlFor="3 days">3 Days</label>
            <input
              type="radio"
              onChange={(e) => fillData(e.target.value, 'recur')}
              name="recur"
              value="2 days"
              checked={data.recur === '2 days' ? true : false}
            />
            <label htmlFor="2 days">2 Days</label>
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
export default ModifyReminder;
