export default function Footer() {
  return (
    <div className="card fixed-bottom">
      <div className="card-header bg-success">@Parad0xJ-(Laurent-CMND)</div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>Ré-apprentissage aprés 4 ans sans toucher une ligne de code.</p>
          <footer className="blockquote-footer">
            ©2024{" "}
            <cite title="Source Title">
              <a
                href="https://www.udemy.com/course/react-formation-complete/"
                className="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >
                Projet du cours : React de A à Z
              </a>{" "}
            </cite>
          </footer>
        </blockquote>
      </div>
    </div>
  );
}
