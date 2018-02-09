import React from "react";

export default function PriceItem({ title, price, clients, processes }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>
        <sup>$</sup>
        {price}
        <sup>cop</sup>
        <span>/Mes* + IVA</span>
      </p>

      <p>Número de clientes a gestionar</p>
      <span>{clients}</span>

      <p>
        Procesos Ejecutivos al año <strong>Sin Comisión.</strong>
      </p>
      <span>Hasta por $80.000.000 cada una.</span>
      <span>{processes}</span>

      <p>Asesoría jurídica permanente.</p>
      <span>Sólo cobranza</span>
      <span>SI</span>
    </article>
  );
}
