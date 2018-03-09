import React from "react";
import Link from "gatsby-link";
import { Box, Flex } from "grid-emotion";
import { css } from "react-emotion";
import Features from "../components/Feature/Features";
import Service from "../components/Service";
import LegalProcess from "../components/Service/LegalProcess";
import Collection from "../components/Service/Collection";
import RealEstate from "../components/Service/RealEstate";
import Hero from "../components/Hero";
import Capital from "../components/Capital";
import Alert from "../components/Alert";
import Polygon from "../components/Polygon";
import Debts from "../components/Debts";
import Banner from "../components/BottomBanner";
import Container from "../components/Container";
import Header from "../components/Header";

function IndexPage(props) {
  console.warn(props);
  return (
    <React.Fragment>
      <Header positioned background={"#006FAE"} />
      <Hero image={props.data.heroImage} />
      <Box is="section" py={[1, 2, 3, 4]}>
        <Container>
          <Flex wrap>
            <Box width={[1, 1 / 2, 1 / 3]} px={2}>
              <Service
                color="#FF5830"
                title="Procesos jurídicos"
                iconName="hammer"
                body={
                  <span>
                    No espere a que su cliente <br /> se quede sin dinero
                  </span>
                }
                modalContent={LegalProcess}
              />
            </Box>
            <Box width={[1, 1 / 2, 1 / 3]} px={2}>
              <Service
                color="#17A0EE"
                title="Cobranza Prejurídica y administrativa"
                iconName="doc"
                body="Mantenga su cartera al día"
                modalContent={Collection}
              />
            </Box>
            <Box width={[1, 1, 1 / 3]} px={2}>
              <Service
                color="#FFA330"
                title="Rentul Inmobiliario"
                iconName="house"
                body={
                  <span>
                    Arrendamientos Derecho <br /> inmobiliario en general <br />{" "}
                    Administración de propiedad horizontal
                  </span>
                }
                modalContent={RealEstate}
              />
            </Box>
          </Flex>
        </Container>
      </Box>
      <Capital />
      <Box py={[1, 2, 3, 3]}>
        <Container>
          <Alert />
        </Container>
      </Box>
      <Features />

      <Box is="section" py={[1, 2, 3, 4]}>
        <Container width={986}>
          <h2
            css={`
              text-align: center;
            `}
          >
            ¿Por qué los clientes no le pagan a su proveedor?
          </h2>
          <Debts />
        </Container>
      </Box>

      <Banner />
    </React.Fragment>
  );
}

export default IndexPage;

export const query = graphql`
  query homeQuery {
    heroImage: imageSharp(id: { regex: "/main-banner/" }) {
      sizes(maxWidth: 1920, quality: 95) {
        ...GatsbyImageSharpSizes_withWebp
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
