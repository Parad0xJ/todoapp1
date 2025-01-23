// eslint-disable-next-line react/prop-types
//Ajout du . devant /src/ des 2 images por github pages
export default function NavBar({ width = 30, height = 24 }) {
  return (
    <nav className="navbar bg-success">
      <div className="container-fluid justify-content-center">
        <a className="navbar-brand" href="#">
          <img
            src="../src/assets/bootstrap-logo.svg"
            alt="Logo"
            width={width}
            height={height}
            className="d-inline-block align-text-top me-3"
          />
          React & Boostrap APP
        </a>
        <img
          src="../src/assets/react.svg"
          alt="Logo"
          width={width}
          height={height}
          className="d-inline-block align-text-top"
        />
      </div>
    </nav>
  );
}
