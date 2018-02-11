import React, { Fragment } from "react";
import { Box } from "grid-emotion";
import FaqItem from "./FaqItem";

export default function FaqList() {
  return (
    <Box py={3}>
      <FaqItem
        title={
          <Fragment>
            ¿QUÉ ES<br />
            <b>RENTUL DEFENSE?</b>
          </Fragment>
        }
      >
        <p>
          RENTUL DEFENSE es una casa de cobranza dedicada al acompañamiento
          integral de todas las etapas del cobro de cartera en empresas
          comercios, que en el desarrollo de su actividad otorguen algún tipo de
          crédito. Además, brinda respaldo y acompañamiento jurídico a
          arrendadores y administraciones de propiedad horizontal.
        </p>
      </FaqItem>
      <FaqItem
        title={
          <Fragment>
            ¿QUÉ HACE <br />
            RENTUL DEFENSE?
          </Fragment>
        }
      >
        <p>
          COBRO JURÍDICO: Brindamos acompañamiento desde la elaboración e
          interposición de la demanda hasta la terminación del proceso.
        </p>
        <p>
          COBRO PREJURÍDICO: Hacemos de cobro para cuentas en etapa prejurídica
          por medio de nuestro sistema (de manera automatizada) y nuestro
          recurso jurídico (abogados especializados en cobranza persuasiva).
        </p>
        <p>
          COBRO ADMINISTRATIVO: Nos encargamos de toda la gestión de cobro de
          cada una de las cuentas que nuestros usuarios van generando en el
          transcurso del mes.
        </p>
      </FaqItem>
      <FaqItem
        title={
          <Fragment>
            ¿QUÉ PORCENTAJE DE COMISIÓN COBRAN EN CADA PROCESO?
          </Fragment>
        }
      >
        <p>
          Para procesos de cobro inferiores a ochenta millones de pesos, RENTUL
          DEFENSE no cobra comisión en ninguno de los procesos: administrativo,
          prejurídico y jurídico.
        </p>
      </FaqItem>
      <FaqItem
        title={
          <Fragment>
            ¿PARA QUÉ SIRVE LA PLATAFORMA WEB DE RENTUL DEFENSE?
          </Fragment>
        }
      >
        <p>
          Nuestra plataforma es el medio de comunicación entre nuestro usuario
          (proveedor), su cliente (deudor) y RENTUL DEFENSE.
        </p>
        <p>
          Es por este medio que nuestro usuario registra sus clientes y las
          cuentas por cobrar para que nosotros nos encarguemos de toda su
          gestión de cobro: desde recordatorios amigables de pago, pasando por
          procesos prejurídicos hasta activación de demandas ante un juez de la
          República.
        </p>
      </FaqItem>
      <FaqItem
        title={
          <Fragment>
            ¿CÓMO PUEDO SOLICITAR LA EJECUCIÓN DE UNA DEMANDA?
          </Fragment>
        }
      >
        <p>
          Por medio de nuestros asesores jurídicos: vía telefónica, chat o
          plataforma. Ingrese la información de su deudor, la(s) cuenta(s) por
          cobrar: el sistema comienza su gestión de cobro, recopilamos la
          información de bienes muebles e inmuebles y nos comunicamos con usted
          para programar una cita con el abogado asignado a su caso.
        </p>
      </FaqItem>
      <FaqItem
        title={
          <Fragment>
            ¿PUEDO SOLICITAR EL COBRO PREJURÍDICO DE UN CLIENTE EN OTRA CIUDAD?
          </Fragment>
        }
      >
        <p>
          Sí. RENTUL DEFENSE realiza su gestión de cobro en todo el territorio
          nacional de los países en los que opera.
        </p>
      </FaqItem>
      <FaqItem
        title={
          <Fragment>
            ¿PUEDO SOLICITAR LA EJECUCIÓN DE UNA DEMANDA EN UNA CIUDAD DIFERENTE
            A LA DE MI DOMICILIO?
          </Fragment>
        }
      >
        <p>
          Sí. RENTUL DEFENSE cuenta con un equipo jurídico en casi todas las
          ciudades capitales del territorio nacional de los países en donde
          opera.
        </p>
      </FaqItem>
      <FaqItem title={<Fragment>¿CÓMO HACEN EL COBRO PREJURÍDICO?</Fragment>}>
        <p>
          Hacemos gestión de cobro automatizada y por medio de nuestro equipo
          jurídico. De acuerdo a la relación comercial que tenga con su cliente
          nos da la instrucción de cómo, desde cuándo y cada cuánto le cobramos.
          Nuestros asesores jurídicos se comunican con su cliente para tratar de
          llegar a acuerdos de pago y así evitar la demanda.
        </p>
      </FaqItem>
      <FaqItem
        title={
          <Fragment>
            ¿CÓMO REALIZAN LA GESTIÓN DE COBRO ADMINISTRATIVA?
          </Fragment>
        }
      >
        <p>
          Es la gestión de cobro diseñada para cuentas que aún no se han vencido
          o están recién vencidas. Enviamos recordatorios amigables de pago de
          acuerdo a su instrucción: usted nos dice desde cuándo y cada cuánto
          enviarlo.
        </p>
      </FaqItem>
      <FaqItem
        title={
          <Fragment>
            ¿CÓMO Y CADA CUÁNTO ME INFORMAN DE LA GESTIÓN QUE REALIZAN?
          </Fragment>
        }
      >
        <p>
          Todos los días recibirá informe de la gestión realizada por la agencia
          de cobranza. Además, una vez a la semana se comunicará un asesor
          jurídico para contarle el avance con los clientes que se encuentren en
          etapa prejurídica. Queremos que tome decisiones a tiempo.
        </p>
      </FaqItem>
      <FaqItem
        title={
          <Fragment>
            ¿CÓMO LE DIGO A MIS CLIENTES QUE AHORA USTEDES ME RESPALDAN?
          </Fragment>
        }
      >
        <p>
          En la plataforma podrá descargar una circular informativa para que la
          radique con cada una de las facturas que genera. Allí le informamos a
          su cliente que usted, de ahora en adelante, cuenta con el respaldo de
          una agencia de cobranza que lo acompaña, lo respalda y, si es el caso,
          lo representa ante la ley para un eventual proceso jurídico. Todo lo
          decimos en un lenguaje muy amable para que no se deteriore la relación
          comercial con su cliente, pero que aun así le quede claro del poder
          jurídico que ahora tiene.
        </p>
      </FaqItem>
      <FaqItem
        title={
          <Fragment>
            ¿CUÁNTOS CLIENTES PUEDO REGISTRAR EN LA PLATAFORMA?
          </Fragment>
        }
      >
        <p>
          No hay límite. De acuerdo al plan escogido tendrá una bolsa de
          llamadas y mensajes de texto disponible para realizar la gestión de
          cobro. Una vez termine con el recurso, el sistema seguirá haciendo
          gestión de cobro vía correo electrónico, los cuales son ilimitados.
        </p>
      </FaqItem>
      <FaqItem
        title={
          <Fragment>
            ¿QUÉ VALORES PUEDO COBRAR POR MEDIO DE LA AGENCIA DE COBRANZA?
          </Fragment>
        }
      >
        <p>
          Todos. RENTUL DEFENSE cobra con la misma intensidad y argumento
          jurídico todas las cuentas por cobrar sin importar el valor.
        </p>
      </FaqItem>
      <FaqItem
        title={
          <Fragment>
            ¿PUEDO COBRARLE A VARIOS CONTACTOS DE UNA MISMA EMPRESA?
          </Fragment>
        }
      >
        <p>
          Sí. Puede ingresar todos los contactos con sus datos en la plataforma
          y escoger a cuáles de ellos hacerle gestión de cobro.
        </p>
      </FaqItem>
      <FaqItem
        title={
          <Fragment>
            ¿A PARTIR DE QUÉ MOMENTO COMIENZA LA GESTIÓN DE COBRO?
          </Fragment>
        }
      >
        <p>
          Inmediatamente después de realizar el registro de la cuenta por cobrar
          en la plataforma.
        </p>
      </FaqItem>
      <FaqItem
        title={
          <Fragment>
            ¿A PARTIR DE QUÉ TIEMPO PUEDO SOLICITAR UNA DEMANDA?
          </Fragment>
        }
      >
        <p>
          Inmediatamente después de adquirir nuestro servicio puede registrar la
          información de cliente a demandar y comenzaremos agotando todas las
          instancias establecidas por la ley. Puede solicitarnos la demanda y
          nosotros comenzaremos con la búsqueda de bienes de su deudor y, tan
          pronto tengamos esa información, el abogado asignado se comunicará con
          usted para proceder con el inicio del proceso.
        </p>
      </FaqItem>
      <FaqItem title={<Fragment>¿EL PLAN TIENE PERMANENCIA?</Fragment>}>
        <p>
          El plan Básico tiene un pago mensual el cual no es renovable. Los
          demás planes, que incluyen cobro jurídico, tienen un valor total que
          se difiere a 12 cuotas mensuales y brinda todos los servicios durante
          un año completo.
        </p>
      </FaqItem>
      <FaqItem
        title={
          <Fragment>¿PUEDO AUMENTAR DE PLAN EN CUALQUIER MOMENTO?</Fragment>
        }
      >
        <p>
          Sí. En la plataforma encontrará la opción para hacerlo en cualquier
          momento.
        </p>
      </FaqItem>
      <FaqItem
        title={<Fragment>¿CUÁLES SON LOS MEDIOS DE PAGO ACEPTADOS?</Fragment>}
      >
        <p>
          Tarjeta de crédito, PSE, Pagatodo, Gane, Baloto, Efecty, consignación
          bancaria y transferencia. Y, en general, cualquier medio de pago
          ofrecido por nuestro proveedor del servicio EPAYCO.
        </p>
      </FaqItem>
      <FaqItem title={<Fragment>¿LA INFORMACIÓN ES CONFIDENCIAL?</Fragment>}>
        <p>
          Sí. Toda la información, tanto de medios de pagos como de información
          de su cartera, es confidencial.
        </p>
      </FaqItem>
      <FaqItem
        title={
          <Fragment>
            ¿SON LEGALES LOS MÉTODOS UTILIZADOS POR RENTUL DEFENSE EN LA
            COBRANZA?
          </Fragment>
        }
      >
        <p>
          Sí. RENTUL DEFENSE actúa dentro de los límites de la ley y en el marco
          de la legislación del país en el que ofrezca sus servicios.
        </p>
      </FaqItem>
      <FaqItem
        title={
          <Fragment>
            ¿NECESITO HACER FIRMAR AUTORIZACIÓN DE HABEAS DATA A MIS CLIENTES
            PARA QUE RENTUL DEFENSE LOS COBRE?
          </Fragment>
        }
      >
        <p>
          No. Nuestra figura es conocida como “Endoso en procuración” y hace
          referencia a la facultad que el propietario del título valor nos da
          para cobrarlo judicial o extrajudicialmente. Dicho endoso no
          transfiere la propiedad del título, solo autoriza la gestión de cobro.
        </p>
        <p>Para mayor información comuníquese con nuestros asesores.</p>
      </FaqItem>
    </Box>
  );
}
