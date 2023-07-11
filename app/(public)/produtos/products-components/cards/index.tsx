'use client';

import { GetProducts } from '@/app/(public)/services/get-products';
import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export default async function CardExampleImageCard() {

  const materiais = await GetProducts();

  return(
    <Card>
      <Image src='/images/avatar/large/daniel.jpg' wrapped ui={false} />
      <Card.Content>
        <Card.Header>Daniel</Card.Header>
        <Card.Meta>Joined in 2016</Card.Meta>
        <Card.Description>
          Daniel is a comedian living in Nashville.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          10 Friends
        </a>
      </Card.Content>
    </Card>
  )
}
