import { Helmet } from "react-helmet";
import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageRandomOrder = () => {
  const { appTitle } = useContext(AppContext);

  return (
    <div className="page pageRandomOrder">
      <Helmet>
        <title>{appTitle} - RandomOrder</title>
      </Helmet>
    </div>
  );
};
