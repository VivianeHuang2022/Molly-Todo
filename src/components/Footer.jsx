import classes from '../styles/Footer.module.css';
import githubLogo from '../assets/github-logo.png';

function Footer() {
  return (
    <footer className={classes.footerContent}>
      <img
        src={githubLogo}
        alt="Github Logo"
        className={classes.githubLogo}
        style={{ width: '62px' }} // Add this inline style to set the width
      />
      <p className={classes.githubLink}>
        <a href="https://github.com/VivianeHuang2022/Molly-Todo.git">GitHub Repository</a>
      </p>
    </footer>
  );
}

export default Footer;
