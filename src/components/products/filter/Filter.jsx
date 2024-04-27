import "./Filter.scss";
import { IoMdClose } from "react-icons/io";
import PropTypes from "prop-types";

const Filter = (props) => {
  const { clickHandler } = props;
  return (
    <section className="filter-container">
      <section className="heading">
        <h2>Filters</h2>
        <button className="close-btn" onClick={clickHandler}>
          <IoMdClose />
        </button>
      </section>

      <section className="input-container">
        <section className="input-wrapper">
          <label>Product Name</label>
          <input type="text" placeholder="Product Name" />
        </section>

        <section className="select-wrapper">
          <label>Category</label>
          <select name="category" id="category">
            <option value="category">Category A</option>
            <option value="category">Category B</option>
            <option value="category">Category C</option>
          </select>
        </section>

        <section className="input-wrapper">
          <label>Event Name</label>
          <input type="text" placeholder="Event Name" />
        </section>

        <section className="input-wrapper">
          <label>Match Name</label>
          <input type="text" placeholder="Match Name" />
        </section>

        <section className="select-wrapper">
          <label>Team</label>
          <select name="team" id="team">
            <option value="team">Team A</option>
            <option value="team">Team B</option>
            <option value="team">Team C</option>
          </select>
        </section>
      </section>
    </section>
  );
};

Filter.propTypes = { clickHandler: PropTypes.func };
export default Filter;
