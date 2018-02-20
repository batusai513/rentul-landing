import React from "react";
import BaseServiceContent from "./BaseServiceContent";

export default function LegalProcess({ color, background, iconName }) {
  return (
    <BaseServiceContent
      title="Procesos jurídicos"
      color={color}
      background={background}
      iconName={iconName}
      subtitle="Demande antes de que su cliente se quede sin dinero."
    >
      <p>
        <b>RENTUL DEFENSE</b> brinda acompañamiento profesional en todo el
        proceso ejecutivo, con el fin de solicitarle a un juez de la República
        que ordene el pago de la obligación al deudor: mediante sentencias,
        embargo de bienes muebles, inmuebles y/o cuentas bancarias.
      </p>
      <h3>SERVICIOS</h3>
      <ul>
        <li>Abogados especializados en cobranza.</li>
        <li>Acompañamiento durante todo el proceso.</li>
        <li>
          Solicitud inmediata de medidas cautelares: embargo de bienes muebles,
          inmuebles y/o cuentas bancarias.
        </li>
        <li>Preparación y asistencia a audiencias.</li>
        <li>Radicación y supervisión de cada etapa procesal.</li>
        <li>Radicación de memoriales, solicitudes y recursos.</li>
        <li>Asesoría en cobranza permanente, no solo del caso ejecutado.</li>
      </ul>
      <h3>SIN COMISIÓN</h3>
      <p>No cobramos comisión en ninguno de nuestros procesos.</p>
      <p>
        Pagando una mensualidad tiene derecho a tres demandas al años hasta por
        ochenta millones de pesos cada una ($80.000.000)*
      </p>
      <p>
        También contamos con planes de seis o nueve demandas al año. Elija el
        plan de acuerdo a sus necesidades. Cada plan incluye el cobro el cobro
        administrativo de la cartera de su empresa en las etapas preventiva y
        preurídica.
      </p>
    </BaseServiceContent>
  );
}
