import React from "react";
import Link from "gatsby-link";
import { Box, Flex } from "grid-emotion";
import { css } from "react-emotion";
import Features from "../components/Feature/Features";
import Service from "../components/Service";
import Hero from "../components/Hero";
import Capital from "../components/Capital";
import Alert from "../components/Alert";
import Polygon from "../components/Polygon";
import Debts from '../components/Debts';
import Banner from '../components/BottomBanner';
import Container from "../components/Container";

function IndexPage(props) {
  return (
    <div>
      <Hero />
      <Box is="section" py={[1, 2, 3, 4]}>
        <Container>
          <Flex wrap>
            <Box width={[1, 1 / 2, 1 / 3]} px={2}>
              <Service
                color="#FF5830"
                title="Procesos jurídicos"
                body={
                  <span>
                    No espere a que su cliente <br /> se quede sin dinero
                  </span>
                }
              />
            </Box>
            <Box width={[1, 1 / 2, 1 / 3]} px={2}>
              <Service
                color="#17A0EE"
                title="Cobranza Prejurídica y administrativa"
                body="Mantenga su cartera al día"
              />
            </Box>
            <Box width={[1, 1, 1 / 3]} px={2}>
              <Service
                color="#FFA330"
                title="Rentul Inmobiliario"
                body={
                  <span>
                    Arrendamientos Derecho <br /> inmobiliario en general <br />{" "}
                    Administración de propiedad horizontal
                  </span>
                }
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
          <h2 css={`text-align: center;`}>¿Por qué los clientes no le pagan a su proveedor?</h2>
          <Debts />
        </Container>
      </Box>

      <Banner />
    </div>
  );
}

export default IndexPage;

export const query = graphql`
  query homeQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
