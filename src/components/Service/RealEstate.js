import React from "react";
import { Row, Column } from "../Grid";
import BaseServiceContent from "./BaseServiceContent";
import Card from "../Card/Card";
import CardHeader from "../Card/CardHeader";
import CardBody from "../Card/CardBody";

export default function Collection({ color, background, iconName }) {
  return (
    <BaseServiceContent
      title="RENTUL INMOBILIARIO"
      color={color}
      background={background}
      iconName={iconName}
      subtitle={[
        "Arrendamientos",
        "Derecho inmobiliario en general",
        "Administración de propiedad horizontal"
      ]}
    >
      <p>
        <b>RENTUL DEFENSE</b> brinda acompañamiento jurídico de profesionales
        del derecho inmobiliario para propietarios de inmuebles y
        administraciones de propiedad horizontal.
      </p>
      <h3>ARRENDAMIENTOS</h3>
      <p>Gestión de cobro, Nosotros le cobramos a su inquilino.</p>
      <h4>¿Para qué?</h4>
      <p>
        Para que su inquilino sepa que a usted lo acompaña una agencia de
        cobranza que no dudará en iniciar proceso en su contra si:
      </p>
      <ul>
        <li>
          <b>No cumple con el pago del canon de arrendamiento.</b>
        </li>
        <li>
          <b>Genera daño a la propiedad.</b>
        </li>
        <li>
          <b>Se atrasa con servicios públicos domiciliarios.</b>
        </li>
      </ul>
      <Row spacing={2} wrap>
        <Column spacing={2} w={[1, 1, 1 / 2]} mb={2}>
          <Card
            css={`
              height: 100%;
            `}
          >
            <CardHeader background={color} color="white">
              ACOMPAÑAMIENTO LEGAL
            </CardHeader>
            <CardBody>
              <p>
                <b>Cuéntenos su caso y nosotros lo asesoramos.</b>
              </p>
              <p>
                <b>
                  Todo nuestro acompañamiento legal lo realizamos por medio de
                  único pago por caso y lo cubrirá durante todo el proceso.
                </b>
              </p>
              <p>
                <a
                  css={`
                    color: ${color};
                  `}
                  href="#"
                >
                  Solicite más información
                </a>
              </p>
            </CardBody>
          </Card>
        </Column>
        <Column spacing={2} w={[1, 1, 1 / 2]} mb={2}>
          <Card
            css={`
              height: 100%;
            `}
          >
            <CardHeader background={color} color="white">
              ADMINISTRACIÓN DE PROPIEDAD HORIZONTAL
            </CardHeader>
            <CardBody>
              <p>
                <b>
                  La mejor y más rápido forma de cobrar las cuotas de
                  administración vencida.
                </b>
              </p>
              <p>
                <b>Recuperamos cartera vencida.</b>
              </p>
              <p>
                <b>Cobramos por prejurídica y jurídicamente.</b>
              </p>
              <p>
                <b>Cobramos bajo comisión de éxito.</b>
              </p>
              <p>
                <a
                  css={`
                    color: ${color};
                  `}
                  href="#"
                >
                  Solicite más información
                </a>
              </p>
            </CardBody>
          </Card>
        </Column>
      </Row>
    </BaseServiceContent>
  );
}
