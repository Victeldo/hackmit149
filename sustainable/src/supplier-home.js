import React from "react";

import NavigationLinks1 from "./navigation-links1";
import styles from "./supplier-home.module.css";

const SupplierHome = (props) => {
  return (
    <div className={styles["container"]}>
      <NavigationLinks1 rootClassName="root-class-name10"></NavigationLinks1>
    </div>
  );
};

export default SupplierHome;
