import "./Sidenav.scss";
import { FaChartLine } from "react-icons/fa";
import { RiPagesLine } from "react-icons/ri";
import { RiTableView } from "react-icons/ri";
import { FaRegFileAlt } from "react-icons/fa";
import { RiArrowRightDoubleLine, RiArrowLeftDoubleLine } from "react-icons/ri";
import { useState } from "react";

const Sidenav = () => {
  const [isSidenavOpen, setSidenavOpen] = useState(false);

  const toggleNav = () => {
    setSidenavOpen(!isSidenavOpen);
  };

  return (
    <aside className={"sidenav-container" + (isSidenavOpen ? " open" : "")}>
      <section className="w-full">
        <figure className="logo">
          <p>logo</p>
        </figure>

        <section className="menu-container">
          <button>
            <FaRegFileAlt />
            <p>Menu 1</p>
          </button>
          <button>
            <RiTableView />
            <p>Menu 2</p>
          </button>
          <button>
            <RiPagesLine />
            <p>Menu 3</p>
          </button>
          <button>
            <FaChartLine />
            <p>Menu 4</p>
          </button>
        </section>
      </section>

      <section className="expand-nav">
        <button onClick={toggleNav}>
          {isSidenavOpen ? (
            <RiArrowLeftDoubleLine />
          ) : (
            <RiArrowRightDoubleLine />
          )}
        </button>
      </section>
    </aside>
  );
};

export default Sidenav;
