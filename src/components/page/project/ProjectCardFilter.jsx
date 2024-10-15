import React, { useReducer, useState } from "react";
import { Link } from "react-router-dom";
import data from "../../../data/data";

function ProjectCardFilter() {
  const [items, setItem] = useState(data);

  const filterItem = (categoryItem) => {
    const updatedItem = data.filter((currentElement) => {
      return currentElement.category === categoryItem;
    });

    setItem(updatedItem);
  };

  const initialState = { statementActive: "" };
  
  function reducer(state, action) {
    switch (action.type) {
      case "dataAll":
        setItem(data);
        return { statementActive: "dataAll" };
      case "UI":
        filterItem("UI");
        return { statementActive: "UI" };
      case "web":
        filterItem("web");
        return { statementActive: "web" };
      case "developing":
        filterItem("developing");
        return { statementActive: "developing" };
      case "Graphic":
        filterItem("Graphic");
        return { statementActive: "Graphic" };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div className="row">
        <div className="col-12">
          <ul className="isotope-menu">
            {/* <li
              onClick={() => dispatch({ type: "dataAll" })}
              className={state.statementActive === "dataAll" ? "active" : ""}
            >
              All
            </li> */}
            {/* <li
              onClick={() => dispatch({ type: "UI" })}
              className={state.statementActive === "UI" ? "active" : ""}
            >
              UI/UX
            </li>
            <li
              onClick={() => dispatch({ type: "web" })}
              className={state.statementActive === "web" ? "active" : ""}
            >
              Web Design
            </li>
            <li
              onClick={() => dispatch({ type: "developing" })}
              className={state.statementActive === "developing" ? "active" : ""}
            >
              Developing
            </li>
            <li
              onClick={() => dispatch({ type: "Graphic" })}
              className={state.statementActive === "Graphic" ? "active" : ""}
            >
              Graphic Design
            </li> */}
          </ul>
        </div>
      </div>
      <div className="row g-4 project-items d-flex">
        {items.map((element) => {
          const { title, image, id, details, link } = element;
          return (
            <div key={id} className="col-md-6 col-lg-4 single-item">
              <div className="item-img">
                <Link to={link}>
                  <img src={image} alt="images" />
                </Link>
              </div>
              <div className="item-inner-cnt">
                <span>{title}</span>
                <h4>{details}</h4>
                <div className="view-btn">
                  <Link to={link}>view details</Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProjectCardFilter;
