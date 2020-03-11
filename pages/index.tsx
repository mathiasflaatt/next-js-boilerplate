import React from "react";
import { NextPage } from "next";

import { Header } from "@components/Header";
import { Nav } from "@components/Nav";
import { CenteredMessage } from "@components/CenteredMessage";

const Index: NextPage = () => {
  return (
    <Nav>
      <Header title="Next.js Bootsrap" />
      <CenteredMessage
        title={"Welcome!"}
        message={"This is an app using Next.js, Typescript, express.js and Bootstrap4"}
      />
    </Nav>
  );
};

export default Index;
