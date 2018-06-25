import React from "react";
import Header from "../components/Header";
import PageTitle from '../components/PageTitle';
import FaqList from "../components/FaqList";
import Layout from '../components/Layout';

export default function Faq(props) {
  return (
    <Layout>
      <Header background={'#006FAE'} />
      <PageTitle title="Preguntas Frecuentes" />
      <FaqList />
    </Layout>
  );
}

export const query = graphql`
  query faqQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;