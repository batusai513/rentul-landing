import React from "react";
import BaseServiceContent from "./BaseServiceContent";

export default function Collection({ color, iconName }) {
  return (
    <BaseServiceContent
      title="Cobranza Prejurídica y administrativa"
      color={color}
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
      <h3>AHORRE</h3>
      <ul>
        <li>No ocupe al personal de su empresa cobrando.</li>
        <li>No ocupe a sus asesores comerciales cobrando.</li>
        <li>No contrate abogados adicionales.</li>
      </ul>
      <h3>Hacemos</h3>
      <p>
        Cobro gestión de cobro persuasivo, preventivo y prejurídico.
      </p>
      <h3>SIN COMISIÓN</h3>
      <ul>
        <li>En ninguno de nuestros servicios cobramos comisión.</li>
        <li>Planes para pequeña, mediana y gran empresa.</li>
        <li>Reciba reporte diario informándolo sobre el estado de su cartera.</li>
      </ul>
    </BaseServiceContent>
  );
}
