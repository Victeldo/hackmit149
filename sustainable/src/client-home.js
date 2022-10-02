import React from "react";

import NavigationLinks1 from "./navigation-links1";
import styles from "./client-home.module.css";

const ClientHome = (props) => {
  return (
    <div className={styles["container"]}>
      <header data-role="Accordion" className={styles["header"]}>
        <div className={styles["separator"]}></div>
        <nav className={styles["nav"]}>
          <NavigationLinks1 rootClassName="rootClassName19"></NavigationLinks1>
        </nav>
        <div data-type="AccordionHeader" className={styles["accordion-header"]}>
          <svg viewBox="0 0 1024 1024" className={styles["icon"]}>
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div
          data-type="AccordionContent"
          className={styles["accordion-content"]}
        >
          <div className={styles["nav1"]}>
            <NavigationLinks1 rootClassName="rootClassName20"></NavigationLinks1>
          </div>
        </div>
      </header>
      <ul className={["list"]}>
        <li>
          <span>
            <span>Best Individual Suppliers: </span>
            <br></br>
            <br></br>
          </span>
        </li>
        <li>
          <span>
            <span>
              1. Panera Bread
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
            <br></br>
            <span> Distance: 1 mi</span>
            <br></br>
            <span> Urgency: Yes</span>
            <br></br>
            <span> Provides Transportation: Yes</span>
            <br></br>
            <span> Food Provided: Vegetables, Bread</span>
            <br></br>
          </span>
        </li>
        <li>
          <span>
            <span>2. Walmart</span>
            <br></br>
            <span>
              Distance: 1 mi
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
            <br></br>
            <span> Urgency: Yes</span>
            <br></br>
            <span> Provides Transportation: Yes</span>
            <br></br>
            <span>
              Food Provided: Meat, Bread
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
            <span>
              {" "}
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
            <span> </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <span>Best Combination of Suppliers:</span>
            <br></br>
            <br></br>
            <span>
              1. Panera Bread
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
            <br></br>
            <span> Distances:</span>
            <span> 1 mi</span>
            <br></br>
            <span> Urgency: Yes</span>
            <br></br>
            <span> Provides Transportation: Yes</span>
            <br></br>
            <span>
              Food Provided: Vegetables, Bread
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
            <br></br>
            <span> </span>
            <br></br>
            <span> Tosca</span>
            <br></br>
            <span> Distance: 2 mi</span>
            <br></br>
            <span> Urgency: No</span>
            <br></br>
            <span> Provides Transportation: Yes</span>
            <br></br>
            <span> Food Provided: Meat</span>
            <br></br>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ClientHome;
