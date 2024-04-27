import "./ProfileCard.scss";
import PropTypes from "prop-types";
import { IoIosArrowDown } from "react-icons/io";

const ProfileCard = ({ data }) => {
  const { name, imgUrl } = data;
  return (
    <section className="profile-card-container">
      <figure className="img">
        <img src={imgUrl} alt="" />
      </figure>
      <p className="name">{name}</p>
      <IoIosArrowDown />
    </section>
  );
};

export default ProfileCard;
ProfileCard.propTypes = { data: PropTypes.object };
