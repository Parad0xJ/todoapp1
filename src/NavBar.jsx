// eslint-disable-next-line react/prop-types
import bootstrapLogo from "./assets/bootstrap-logo.svg";
import reactLogo from "./assets/react.svg";

export default function NavBar({ width = 30, height = 24 }) {
  return (
    <nav className="navbar bg-success">
      <div className="container-fluid justify-content-center">
        <a className="navbar-brand" href="#">
          <img
            src={bootstrapLogo}
            alt="Logo"
            width={width}
            height={height}
            className="d-inline-block align-text-top me-3"
          />
          React & Boostrap APP
        </a>
        <img
          src={reactLogo}
          alt="Logo"
          width={width}
          height={height}
          className="d-inline-block align-text-top"
        />
      </div>
    </nav>
  );
}
