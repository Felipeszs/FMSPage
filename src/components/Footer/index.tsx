import fsLogo from "../../assets/fs-logo.png";
import "./styles.scss";

export function Footer() {
  return (
    <footer className="site-footer">
      <a className="footer-logo" href="#top" aria-label="Felipe Souza - início">
        <img src={fsLogo} alt="Logo Felipe Souza" />
      </a>
      <p>© 2026 Felipe Souza · Landing pages para negócios locais</p>
    </footer>
  );
}
