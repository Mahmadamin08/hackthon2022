import React from "react";
import "./Form.css";
const Form = () => {
  return (
    <div className="form-container">
      <header className="event-sec">
        <center>
          <div className="e-title">Registration Form</div>
          <div className="e-sub-title">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            architecto quaerat
          </div>
          <div className="e-sub-title">
            Lorem ipsum dolor sit amet, consectetur.
          </div>
        </center>
      </header>
      <form className="event-form-f">
        <div className="col-f">
          <div className="regi-field">
            <label htmlFor="name">Name : </label>
            <input className="ip" id="name" name="name" type="text" />
          </div>
          <div className="regi-field">
            <label htmlFor="gname">Group Name : </label>
            <input className="ip" id="gname" name="gname" type="text" />
          </div>
          <div className="regi-field">
            <label htmlFor="phone">Contact Number : </label>
            <input className="ip" id="phone" name="phone" type="text" />
          </div>
          <div className="regi-field">
            <label htmlFor="email">Email : </label>
            <input className="ip" id="email" name="email" type="email" />
          </div>
          <div className="regi-field">
            <label htmlFor="total-artist">Total number of artist : </label>
            <input
              className="ip"
              id="total-artist"
              name="total-artist"
              type="text"
            />
          </div>
          <div className="regi-field">
            <label htmlFor="theme">Theme of Performance : </label>
            <input className="ip" id="theme" name="theme" type="text" />
          </div>
          <div className="regi-field">
            <label htmlFor="dance-form">Form of Indian Classical Dance: </label>
            <select id="dance-form" name="dance-form" className="ip">
              <option value="dance">Bharatnatyam</option>
              <option value="dance">Kuchipudi</option>
              <option value="dance">Kathakali</option>
              <option value="dance">Odisi</option>
              <option value="dance">Manipuri</option>
              <option value="dance">Katthak</option>
              <option value="dance">Mohiniattam</option>
            </select>
          </div>
        </div>
        <div className="col-f">
          <div className="regi-field">
            <label htmlFor="awards">Details of Awards / Honors : </label>
            <textarea
              id="awards"
              name="awards"
              className="ip"
              type="textfi"
              defaultValue={""}
            />
          </div>
          <div className="regi-field">
            <label htmlFor="past-work">
              Have you performed at District, State, National or International
              Level? If Yes, Provide Details
            </label>
            <textarea
              id="past-work"
              name="past-work"
              type="text"
              rows="5"
              className="ip"
              defaultValue={""}
            />
          </div>
          <div className="regi-field">
            <label htmlFor="photo">Upload your passport size photo</label>
            <input className="ip" id="photo" name="photo" type="file" />
          </div>
          <div className="regi-field">
            <label htmlFor="aadhar">Upload your Aadhar card's photo</label>
            <input className="ip" id="aadhar" name="aadhar" type="file" />
          </div>
          <div className="regi-field">
            <label htmlFor="sign">Upload the photo of your signature</label>
            <input className="ip" id="sign" name="sign" type="file" />
          </div>
          <div className="nav-btn bbox">
            <input
              className=" btns btn-s"
              type="submit"
              defaultValue="Submit"
            />
            <input className="btns btn-r" type="reset" defaultValue="Clear" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
