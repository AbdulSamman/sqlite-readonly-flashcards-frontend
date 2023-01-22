import { Helmet } from "react-helmet";
import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageCategory = () => {
  const { appTitle } = useContext(AppContext);
  return (
    <div className="page pageCategory">
      <Helmet>
        <title>{appTitle} - Category</title>
      </Helmet>
    </div>
  );
};
