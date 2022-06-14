import { useState } from "react";

import { ReactComponent as Bell } from "../../../static/media/bell.8758fea0.svg";

import { ReactComponent as Dropdown } from "../../../static/media/down-arrow.209ab81d.svg";


const Navigation = () => {
  return (
    <div data-test="nav-bar" className="nav-bar">
      <div className="nav-bar__button--burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="nav-bar__location">
        <div className="nav-bar__location--app-name">myENV</div>
        <div className="nav-bar__location--dropdown">
          <span>Current Location</span>
          <span className="nav-bar__location--dropdown--icon"></span>
        </div>
      </div>
      <div className="nav-bar__notification">
        <Bell />
      </div>
    </div>
  );
};

export default Navigation;
