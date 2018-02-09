import React from "react";
import Header from "../components/Header";
import Container from '../components/Container';
import PageTitle from '../components/PageTitle';
import PriceList from '../components/PriceList';

export default function Faq() {
  return (
    <React.Fragment>
      <Header background={'#006FAE'} />
      <PageTitle title="Planes" />
      <Container>
        <PriceList />
      </Container>
    </React.Fragment>
  );
}