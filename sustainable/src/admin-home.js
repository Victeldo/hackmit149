import React from "react";

import styles from "./admin-home.module.css";

const AdminHome = (props) => {
  return (
    <div className={styles["container"]}>
      <header data-role="Accordion" className={styles["header"]}>
        <div className={styles["separator"]}></div>
        <nav className={styles["nav"]}></nav>
        <div data-type="AccordionHeader" className={styles["accordion-header"]}>
          <svg viewBox="0 0 1024 1024" className={styles["icon"]}>
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div
          data-type="AccordionContent"
          className={styles["accordion-content"]}
        >
          <div className={styles["nav1"]}></div>
        </div>
      </header>
    </div>
  );
};

export default AdminHome;
