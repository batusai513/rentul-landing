import React from "react";
import Link from "gatsby-link";
import { Box, Flex } from "grid-emotion";
import Feature from "../components/Feature";
import Hero from "../components/Hero";
import Capital from "../components/Capital";
import Container from "../components/Container";

function IndexPage(props) {
  return (
    <div>
      <Hero />
      <Box is="section" py={[1, 2, 3, 4]}>
        <Container>
          <Flex wrap>
            <Box width={[1, 1 / 2, 1 / 3]} px={2}>
              <Feature
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
              <Feature
                color="#17A0EE"
                title="Cobranza Prejurídica y administrativa"
                body="Mantenga su cartera al día"
              />
            </Box>
            <Box width={[1, 1, 1 / 3]} px={2}>
              <Feature
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
      <Container>
        <div>
          <p>Demande a su cliente cuando aún está comercialmente activo.</p>
        </div>
      </Container>
      <section>
        <div>
          <h3>Sin comisión</h3>
          <p>
            En ninguno de nuestros servicios de recuperación de cartera para
            empresas cobramos comisión.
          </p>
          <p>
            A excepción de Rentul Inmobiliario <a href="#">Saber más</a>
          </p>
        </div>
        <div>
          <h3>No tocamos su dinero</h3>
          <p>
            En todos los comunicados le decimos a su cliente que el pago debe
            hacerlo como acordaron en el momento de la negociación, o como lo ha
            hecho siempre.
          </p>
        </div>
      </section>

      <section>
        <h2>¿Por qué los clientes no le pagan a su proveedor?</h2>
        <p>70%</p>
        <p>
          No es una prioridad: otras empresas le proveen lo mismo, o ya no
          necesita su producto.{" "}
        </p>
        <p>15%</p>
        <p>Piensa que puede esperar</p>
        <p>10%</p>
        <p>Cree que no tiene forma, conocimiento ni dinero para demandarlo</p>
        <p>5%</p>
        <p>Realmente no tiene con qué</p>
      </section>

      <section>
        <h3>Recupere su dinero</h3>
        <p>Mantenga su cartera al día</p>
        <Link to="/">Únete ahora</Link>
      </section>
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
