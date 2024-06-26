
import logo from "../shared/assets/dddforumlogo.png";
import { Link, useLocation } from "react-router-dom";
import { UserData, useUser } from "../contexts/userContext";
import { appSelectors, toClass } from "../shared/selectors";

const Logo = () => (
  <div id="app-logo">
    <img src={logo}></img>
  </div>
);
const TitleAndSubmission = () => (
  <div id="title-container">
    <h1>Domain-Driven Designers</h1>
    <h3>Where awesome domain driven designers are made</h3>
    <Link to={"/submit"}>submit</Link>
  </div>
);

const HeaderActionButton = ({ user }: { user: UserData | null }) => (
  <div id="header-action-button">
    {user ? (
      <div>
        <div className={toClass(appSelectors.header.selector)}>{user.username}</div>
        <u>
          <div>logout</div>
        </u>
      </div>
    ) : (
      <Link to="/join">Join</Link>
    )}
  </div>
);

const shouldShowActionButton = (pathName: string) => {
  return pathName !== "/join";
};

export const Header = () => {
  const { user } = useUser();
  const location = useLocation();

  return (
    <header id="header" className="flex align-center">
      <Logo />
      <TitleAndSubmission />
      {shouldShowActionButton(location.pathname) ? (
        <HeaderActionButton user={user} />
      ) : (
        ""
      )}
    </header>
  );
};
