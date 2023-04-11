import React from 'react';
import { ReminderContext } from './Context';
function Welcome() {
  const { logout } = React.useContext(ReminderContext);
  const d = new Date();
  function TodayDay(num) {
    if (num === 0) return 'Sunday';
    if (num === 1) return 'Monday';
    if (num === 2) return 'Tuesday';
    if (num === 3) return 'Wednesday';
    if (num === 4) return 'Thursday';
    if (num === 5) return 'Friday';
    if (num === 6) return 'Saturday';
    return;
  }

  function TodayMonth(num) {
    if (num === 1) return 'January';
    if (num === 2) return 'February';
    if (num === 3) return 'March';
    if (num === 4) return 'April';
    if (num === 5) return 'May';
    if (num === 6) return 'June';
    return;
  }

  React.useEffect(() => {
    if (localStorage.getItem('user') === 'null') {
      window.location.href = '/';
    }
  }, []);
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
          <h3>
            Welcome to the Appointment Application, {localStorage.getItem('user')}
          </h3>
          <br />
          <h3>
            Today is {TodayDay(d.getDay())}, {d.getDate()} of{' '}
            {TodayMonth(d.getMonth())}
          </h3>
          <br />
          <a href="set-reminder">Set Appointment</a>
          <br /> <a href="modify-reminder">Modify Appointment</a>
          <br /> <a href="disable-reminder">Disable Appointment</a>
          <br /> <a href="delete-reminder">Delete Appointment</a>
          <br /> <a href="enable-reminder">Enable Appointment</a>
          <br /> <a href="view-reminder">View Appointment</a>
          <br />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginTop: '10px',
            }}
          >
            <a href="/">Back</a>
            <button type="submit" onClick={logout} style={{ padding: '3px' }}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Welcome;
