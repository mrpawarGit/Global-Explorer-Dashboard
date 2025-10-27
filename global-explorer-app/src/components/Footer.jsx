import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © {currentYear}{" "}
          <a
            style={{ color: "white" }}
            target="_blank"
            href="https://github.com/mrpawarGit/Global-Explorer-Dashboard"
          >
            Global Explorer Dashboard.
          </a>{" "}
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
