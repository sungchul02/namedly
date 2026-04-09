import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* 왼쪽 */}
        <div className="footer-left">
          <h3>Namedly</h3>
          <p>Descriptive line about what your company does.</p>

          <div className="footer-icons">
            <span>📷</span>
            <span>🔗</span>
            <span>✕</span>
          </div>
        </div>

        {/* 오른쪽 */}
        <div className="footer-right">

          <div className="footer-col">
            <h4>Features</h4>
            <p>Core features</p>
            <p>Pro experience</p>
            <p>Integrations</p>
          </div>

          <div className="footer-col">
            <h4>Learn more</h4>
            <p>Blog</p>
            <p>Case studies</p>
            <p>Customer stories</p>
            <p>Best practices</p>
          </div>

          <div className="footer-col">
            <h4>Support</h4>
            <p>Contact</p>
            <p>Support</p>
            <p>Legal</p>
          </div>

        </div>
      </div>
    </footer>
  );
}