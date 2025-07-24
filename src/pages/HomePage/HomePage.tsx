import "./HomePage.scss";
import { Fragment } from "react";
import { Banner, Description } from "@/widgets/home";

export const HomePage = () => {
  return (
    <Fragment>
      <Banner />
      <Description />
    </Fragment>
  );
};
