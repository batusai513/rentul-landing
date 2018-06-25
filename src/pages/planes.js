import React from "react";
import Header from "../components/Header";
import Container from '../components/Container';
import PageTitle from '../components/PageTitle';
import PriceList from '../components/PriceList';
import Layout from '../components/Layout';
import ReferenceBanner from '../components/BottomBanner/ReferenceBanner';

export default function Faq() {
  return (
    <Layout>
      <Header background={'#006FAE'} />
      <PageTitle title="Planes" />
      <Container>
        <PriceList />
      </Container>
      <ReferenceBanner />
    </Layout>
  );
}