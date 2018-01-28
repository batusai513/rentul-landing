import React from "react";
import Link from "gatsby-link";
import Feature from "../components/Feature";

function IndexPage() {
  return (
    <div>
      <h2>
        Especialistas
        <span> en cobranza</span>
      </h2>
      <section>
        <Feature
          title="Procesos jurídicos"
          body="No espere a que su cliente se quede sin dinero"
        />
        <Feature
          title="Cobranza Prejurídica y administrativa"
          body="Mantenga su cartera al día"
        />
        <Feature
          title="Rentul Inmobiliario"
          body="Arrendamientos Derecho inmobiliario en general Administración de propiedad horizontal"
        />
      </section>

      <section>
        <h2>No Pierda su capital</h2>
        <p>
          Demandar a tiempo es indispensable para la pronta recuperación de su
          dinero.
        </p>
        <h3>Si usted no demanda su cliente puede:</h3>
        <ul>
          <li>Declararse en insolvencia.</li>
          <li>Ser demandado por otros proveedores.</li>
          <li>Cambiar de domicilio.</li>
          <li>Negar la deuda.</li>
        </ul>
      </section>
      <div>
        <p>Demande a su cliente cuando aún está comercialmente activo.</p>
      </div>
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
    </div>
  );
}

export default IndexPage;
