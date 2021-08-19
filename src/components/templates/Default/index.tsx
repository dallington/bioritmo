/* eslint-disable react/require-default-props */
import React from "react";
import Header from "../../molecules/Header";
import Footer from "../../molecules/Footer";
import Container from "../../atoms/Container";
import { TPropsChildren } from "../../../@types";

function PageTemplate({ children }: TPropsChildren) {
  return (
    <div>
      <Header />
      <main>
        <Container>{children as []}</Container>
      </main>
      <Footer />
    </div>
  );
}

export default PageTemplate;
