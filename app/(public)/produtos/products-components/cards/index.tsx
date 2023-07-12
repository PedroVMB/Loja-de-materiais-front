'use client';

import { IMaterial } from '@/app/(public)/model/produto';
import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

type Props = {
  nome: string,
  valor: string, 
  descricao: string, 
  foto: string
}

export default async function ProdutoCard({nome, valor, descricao, foto}: Props) {


  return(
    <Card>
      <Image src={foto} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{nome}</Card.Header>
        <Card.Description>
          {descricao}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          {valor}
        </a>
      </Card.Content>
    </Card>
  )
}
