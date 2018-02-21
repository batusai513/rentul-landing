import React from "react";
import styled from "react-emotion";
import { Box } from "grid-emotion";
import Color from "color";
import BaseServiceContent from "./BaseServiceContent";

const Focus = styled(Box)(
  ({ color }) => `
  border-radius: 5px;
  background-color: ${Color(color)
    .lighten(0.8)
    .alpha(0.3)
    .hsl()};
  color: ${Color(color)
    .darken(0.4)
    .hsl()};
  .focus-title {
    text-transform: uppercase;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
`
);

export default function Collection({ color, background, iconName }) {
  return (
    <BaseServiceContent
      title="Cobranza Prejurídica y administrativa"
      color={color}
      background={background}
      iconName={iconName}
      subtitle="Mantenga su cartera al día."
    >
      <p>
        <b>RENTUL DEFENSE</b> se encarga de hacerle toda la gestión de cobro en
        su empresa. Desde recordatorios amigables de pago hasta notificaciones
        contundentes de cobro prejurídico.
      </p>
      <h3>Cartera Sana</h3>
      <h4>¿Por qué es importante que nosotros hagamos su gestión de cobro?</h4>
      <p>
        Su cliente sabrá, desde el primer momento, que a usted lo acompaña un
        grupo de abogados que lo respalda: esto hace que sus clientes mejoren
        los hábitos de pago.
      </p>
      <Focus p={[2, 3]} mb={3} color={color}>
        <h3 className="focus-title">¡Cambiamos la forma de cobrar!</h3>
        <p>
          Usted conoce a su cliente, usted nos dice cómo y desde cuándo cobrar.
          Genere alertas tempranas para decidir cuándo iniciar cobro prejurídico
          y cuándo demandar.
        </p>
      </Focus>
      <h3>AHORRE</h3>
      <ul>
        <li>No ocupe al personal de su empresa cobrando.</li>
        <li>No ocupe a sus asesores comerciales cobrando.</li>
        <li>No contrate abogados adicionales.</li>
      </ul>
      <h3>Hacemos</h3>
      <p>Cobro gestión de cobro persuasivo, preventivo y prejurídico.</p>
      <h3>SIN COMISIÓN</h3>
      <ul>
        <li>Planes para pequeña, mediana y gran empresa.</li>
        <li>
          Reciba reporte diario informándolo sobre el estado de su cartera.
        </li>
      </ul>
    </BaseServiceContent>
  );
}
