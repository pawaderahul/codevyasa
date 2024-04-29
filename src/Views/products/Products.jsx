import { useState } from "react";
import Label from "../../components/shared/label/Label";
import Table from "../../components/table/Table";
import { labels } from "../../utils/mock-data";
import "./Products.scss";
import Filter from "../../components/products/filter/Filter";
import TableActions from "../../components/products/table-actions/TableActions";

const Products = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <section className="products-container">
      <section className={isFilterOpen ? "w-with-filter" : " w-full"}>
        {labels && (
          <section className="labels-container">
            {labels.map((label) => {
              return <Label key={label.id} name={label.name} />;
            })}
          </section>
        )}

        <TableActions toggleFilter={toggleFilter} />

        <Table />
      </section>
      {isFilterOpen && <Filter clickHandler={toggleFilter} />}
    </section>
  );
};

export default Products;
