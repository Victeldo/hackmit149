import React from "react";

import NavigationLinks2 from "./navigation-links2";
import styles from "./home.module.css";

const Home = (props) => {
  return (
    <div className={styles["container"]}>
      <header data-role="Accordion" className={styles["header"]}>
        <div className={styles["separator"]}></div>
        <nav className={styles["nav"]}>
          <NavigationLinks2 rootClassName="rootClassName19"></NavigationLinks2>
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
            <NavigationLinks2 rootClassName="rootClassName20"></NavigationLinks2>
          </div>
        </div>
      </header>
      <div className={styles["banner"]}>
        <h1 className={styles["text"]}>Our Mission</h1>
        <span className={styles["text01"]}>
          The Green Cycle is an initiative to help the current global problem of
          food wastage. Hence, we want to help solve this problem by redirecting
          the food wasted from restaurants, supermarkets, local grocers, and
          more to places that are in dire need of food such as food banks, soup
          kitchens, meal prep organizations. In this web application, the
          clients will be able to input their food requirements, distance
          values, transportation, and urgency, and be able to find both the best
          individual suppliers and combination of suppliers near them.
        </span>
      </div>
      <div className={styles["stats"]}>
        <div className={styles["stat"]}>
          <h1 className={styles["text02"]}>35+</h1>
          <span className={styles["text03"]}>Happy clients</span>
          <span className={styles["text04"]}>
            Our clients, for the duration of our business, have loved our
            methods and procedures to provide them food from these suppliers.
          </span>
        </div>
        <div className={styles["stat1"]}>
          <h1 className={styles["text05"]}>150</h1>
          <span className={styles["text06"]}>
            <span>Established Connections</span>
            <br></br>
          </span>
          <span className={styles["text09"]}>
            We have created over 150 connections between clients and suppliers
            all throughout the nation.
          </span>
        </div>
        <div className={styles["stat2"]}>
          <h1 className={styles["text10"]}>500,000</h1>
          <span className={styles["text11"]}>Pounds of Food Saved</span>
          <span className={styles["text12"]}>
            Through our application, we have successfully been able to redirect
            large amounts of food from suppliers to clients.
          </span>
        </div>
        <div className={styles["stat3"]}>
          <h1 className={styles["text13"]}>
            <span>24/7</span>
          </h1>
          <span className={styles["text15"]}>
            <span>Working hours</span>
            <br></br>
          </span>
          <span className={styles["text18"]}>
            <span>
              Our service works day and night to make sure no food is wasted.
            </span>
            <br></br>
          </span>
        </div>
      </div>
      <span className={styles["text21"]}>The Green Upcycle</span>
      <span className={styles["text22"]}>Let&apos;s Redirect Your Food!</span>
    </div>
  );
};

export default Home;
