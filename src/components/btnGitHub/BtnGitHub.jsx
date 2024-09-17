import "./style.css";
import gitHubIcon from "../../img/icons/gitHub-black.svg";

// eslint-disable-next-line react/prop-types
const BtnGitHub = ({ link }) => {
  return (
    <a href={link} target="_blank" className="btn-outline">
      <img src={gitHubIcon} alt="" />
      GitHub repo
    </a>
  );
};

export default BtnGitHub;
