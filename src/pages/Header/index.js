import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import "./index.css";
export default class Header extends PureComponent {
  render() {
    return (
      <div className="header-wried">
        <Link to="/shape">
          <div className="columns columns-action">Shape</div>
        </Link>
        <Link to="/burst">
          <div className="columns">Burst</div>
        </Link>
      </div>
    );
  }
}
