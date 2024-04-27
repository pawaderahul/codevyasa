import { useState } from "react";
import ButtonWithIcon from "../../components/shared/button-with-icon/ButtonWithIcon";
import Label from "../../components/shared/label/Label";
import Table from "../../components/table/Table";
import { labels } from "../../utils/mock-data";
import "./Products.scss";
import { FiSearch } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { IoFilterSharp } from "react-icons/io5";
import { TbTableExport } from "react-icons/tb";
import Filter from "../../components/products/filter/Filter";

const Products = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <section className="products-container">
      <section className="w-full">
        {labels && (
          <section className="labels-container">
            {labels.map((label) => {
              return <Label key={label.id} name={label.name} />;
            })}
          </section>
        )}

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

        <Table />
      </section>
      {isFilterOpen && <Filter clickHandler={toggleFilter} />}
    </section>
  );
};

export default Products;
