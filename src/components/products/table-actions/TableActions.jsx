import { FiSearch } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { IoFilterSharp } from "react-icons/io5";
import { TbTableExport } from "react-icons/tb";
import ButtonWithIcon from "../../shared/button-with-icon/ButtonWithIcon";
import PropTypes from "prop-types";
import "./TableActions.scss";

const TableActions = (props) => {
  const { toggleFilter } = props;
  return (
    <section className="table-actions-container">
      <section className="search-container">
        <label>Search</label>
        <section className="input-wrapper">
          <FiSearch />
          <input type="text" placeholder="Search" />
        </section>
      </section>

      <section className="actions">
        <ButtonWithIcon
          icon={<IoMdAdd />}
          name="Add Products"
          clickHandler={() => {}}
        />
        <ButtonWithIcon
          icon={<IoFilterSharp />}
          name="Filters"
          clickHandler={toggleFilter}
        />
        <ButtonWithIcon
          icon={<TbTableExport />}
          name="Export"
          clickHandler={() => {}}
        />
      </section>
    </section>
  );
};

TableActions.propTypes = { toggleFilter: PropTypes.func };
export default TableActions;
