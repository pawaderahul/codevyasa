import { useState } from "react";
import { profileData } from "../../../utils/mock-data";
import Badge from "../../shared/badge/Badge";
import ProfileCard from "../../shared/profile-card/ProfileCard";
import "./Header.scss";
import { FaRegBell } from "react-icons/fa";

const Header = () => {
  const [hasUnreadNotification, setHasUnreadNotification] = useState(true);

  const markAsRead = () => {
    setHasUnreadNotification(false);
  };

  return (
    <header className="header-container">
      <h1>Products</h1>
      <section className="tail-container">
        <Badge clickHandler={markAsRead}>
          {hasUnreadNotification && <div></div>}
          <FaRegBell />
        </Badge>
        <ProfileCard data={profileData} />
      </section>
    </header>
  );
};

export default Header;
