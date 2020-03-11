import React from "react";
import { NextPage, NextPageContext } from "next";

import { Header } from "@components/Header";
import { Nav } from "@components/Nav";
import { CenteredMessage } from "@components/CenteredMessage";

const ReportDetail: NextPage<{ id: string }> = ({ id }) => {
  return (
    <Nav>
      <Header title={`Custom title for id: ${id}`} />
      <CenteredMessage title={`Center title for ${id}`} message={"Some message"} />
    </Nav>
  );
};

ReportDetail.getInitialProps = ({ query }: NextPageContext) => {
  return {
    id: query.id as string,
  };
};

export default ReportDetail;
