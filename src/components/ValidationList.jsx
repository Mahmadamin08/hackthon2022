import React from "react";
import "./ValidationList.css";
const ValidationList = () => {
  return (
    <>
      <header className="event-sec">
        <center>
          <div className="e-title">List Of Artist To Validate</div>
        </center>
      </header>
      <div className="t-box">
        <table>
          <thead>
            <tr>
              <th>Team Name</th>
              <th>Lead Name</th>
              <th>Event Name</th>
              <th>Email</th>
              <th>Event Date</th>
              <th>Validation Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Heavy Dancer</td>
              <td>Saurav</td>
              <td>Navratri 2022</td>
              <td>
                <a href="#">saurav@gmail.com</a>
              </td>
              <td>03/10/2022</td>
              <td className="pd">Pending</td>
            </tr>
            <tr>
              <td>Surila Singer</td>
              <td>Ajit</td>
              <td>Republic Day 2022</td>
              <td>
                <a href="#">ajit@gmail.com</a>
              </td>
              <td>26/01/2023</td>
              <td className="ap">Approved</td>
            </tr>
            <tr>
              <td>KaviOp</td>
              <td>Priyansh</td>
              <td>KaviMahotsav 2022</td>
              <td>
                <a href="#">kpd@gmail.com</a>
              </td>
              <td>18/12/2022</td>
              <td className="pd">Pending</td>
            </tr>
            <tr>
              <td>Let's Nacho</td>
              <td>Amin</td>
              <td>Independent Day 2022</td>
              <td>
                <a href="#">amin@gmail.com</a>
              </td>
              <td>15/08/2023</td>
              <td className="ap">Approved</td>
            </tr>
            <tr>
              <td>The Engineerzzz</td>
              <td>Virengiri</td>
              <td>Engineer's Day 2022</td>
              <td>
                <a href="#">Virengiri@gmail.com</a>
              </td>
              <td>15/09/2022</td>
              <td className="ap">Approved</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ValidationList;
