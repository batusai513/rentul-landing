import React from "react";
import BaseServiceContent from "./BaseServiceContent";

export default function Collection({ color, iconName }) {
  return (
    <BaseServiceContent
      title="RENTUL INMOBILIARIO"
      color={color}
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
    </BaseServiceContent>
  );
}
