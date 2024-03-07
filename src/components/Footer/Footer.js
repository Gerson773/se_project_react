import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div>Developed By Gerson</div>
      <div>{new Date().getFullYear()}</div>
    </footer>
  );
};

export default Footer;
