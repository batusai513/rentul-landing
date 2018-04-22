import React from 'react';
import { Row, Column } from '../Grid';
import { Input, Textarea } from '../Forms';
import { Button } from '../Buttons';

export default class Form extends React.Component {
  render() {
    return (
      <Row spacing={1} flexWrap="wrap">
        <Column w={[1, 1 / 2]} spacing={1} mb={1}>
          <Input name="name" dark type="text" placeholder="Nombre" />
        </Column>
        <Column w={[1, 1 / 2]} spacing={1} mb={1}>
          <Input name="email" dark type="text" placeholder="Correo" />
        </Column>
        <Column w={1} spacing={1} mb={2}>
          <Textarea
            name="message"
            dark
            name=""
            rows="5"
            placeholder="Mensaje"
          />
        </Column>
        <Column w={1} spacing={1} mb={2}>
          <Button
            styles="info"
            css={`
              border-color: #858a91;
            `}
            isRounded
            type="submit"
          >
            Enviar
          </Button>
        </Column>
      </Row>
    );
  }
}
