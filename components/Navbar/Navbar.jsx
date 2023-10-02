import React from "react";
import "./Navbar.css";
import photo from '../../img/user-avatar.png'

export default function Navbar(props) {
  return (
    <div className="navbar">
      <h2>Awesome Kanban Board</h2>
      <div>
        <div className="imgContainer">
          <img src={photo} />
        </div>
      </div>
    </div>
  );
}
