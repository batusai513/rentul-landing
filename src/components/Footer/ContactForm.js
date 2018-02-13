import React from "react";
import { Row, Column } from "../Grid";
import { Input, Textarea } from "../Forms";
import { Button } from '../Buttons';

export default function ContactForm() {
  return (
    <Row spacing={1} wrap>
      <Column w={1} spacing={1} mb={1}>
        <Input dark type="text" placeholder="Nombre" />
      </Column>
      <Column w={[1, 1 / 2]} spacing={1} mb={1}>
        <Input dark type="text" placeholder="Teléfono" />
      </Column>
      <Column w={[1, 1 / 2]} spacing={1} mb={1}>
        <Input dark type="text" placeholder="Celular" />
      </Column>
      <Column w={[1, 1 / 2]} spacing={1} mb={1}>
        <Input dark type="text" placeholder="Ciudad" />
      </Column>
      <Column w={[1, 1 / 2]} spacing={1} mb={1}>
        <Input dark type="text" placeholder="Email" />
      </Column>
      <Column w={1} spacing={1} mb={2}>
        <Textarea dark name="" rows="5" placeholder="Mensaje" />
      </Column>
      <Column w={1} spacing={1} mb={2}>
        <Button css='color: #858A91; border-color: #858A91;' isRounded isBordered type="submit">Enviar</Button>
      </Column>
    </Row>
  );
}
