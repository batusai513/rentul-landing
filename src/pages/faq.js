import React from "react";
import Header from "../components/Header";
import PageTitle from '../components/PageTitle';
import FaqList from "../components/FaqList";

export default function Faq(props) {
  console.warn(props);
  return (
    <React.Fragment>
      <Header background={'#006FAE'} />
      <PageTitle title="Preguntas Frecuentes" />
      <FaqList />
    </React.Fragment>
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