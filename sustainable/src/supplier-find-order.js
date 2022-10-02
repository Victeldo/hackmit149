import React from "react";

import NavigationLinks1 from "./navigation-links1";
import styles from "./supplier-find-order.module.css";

const SupplierFindOrder = (props) => {
  return (
    <div className={styles["container"]}>
      <header data-role="Accordion" className={styles["header"]}>
        <div className={styles["separator"]}></div>
        <nav className={styles["nav"]}>
          <NavigationLinks1 rootClassName="root-class-name11"></NavigationLinks1>
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
            <NavigationLinks1 rootClassName="root-class-name12"></NavigationLinks1>
          </div>
        </div>
      </header>
      <div className={styles["container1"]}>
        <span className={styles["text"]}>What food item(s) do you have?</span>
        <span>
          <span>
             I have
            <span
              dangerouslySetInnerHTML={{
                __html: " ",
              }}
            />
          </span>
          <br></br>
        </span>
        <select className={styles["select"]}>
          <option value="Vegetables">Vegetables</option>
          <option value="Rice">Rice</option>
          <option value="Meat">Meat</option>
        </select>
        <span>
          <span> to be delivered within</span>
          <br></br>
        </span>
        <select className={styles["select1"]}>
          <option value="1">1</option>
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
        <span> mi radius.</span>
      </div>
      <div className={styles["container2"]}>
        <span className={styles["text08"]}>
          <span>Do you need food now or would like to request for later?</span>
          <br></br>
        </span>
        <select className={styles["select2"]}>
          <option value="Now" selected>
            Now
          </option>
          <option value="Later">Later</option>
        </select>
      </div>
      <div className={styles["container3"]}>
        <span className={styles["text11"]}>
          <span>What forms of transportation would you prefer?</span>
          <br></br>
        </span>
        <select className={styles["select3"]}>
          <option value="Pickup" selected>
            Pickup
          </option>
          <option value="Delivery">Delivery</option>
        </select>
      </div>
    </div>
  );
};

export default SupplierFindOrder;
