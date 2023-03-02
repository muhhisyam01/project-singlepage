import React from 'react'
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap'

export default function cardBatik({item}) {
  return (
    <Card
    inverse
    outline
    style={{
      width: '18rem'
    }}
  >
    <img
      alt="Sample"
      src={item.link_batik}
    />
    <CardBody>
      <CardTitle tag="h5">
       {item.nama_batik}
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        {item.makna_batik}
      </CardSubtitle>
      <CardText>
        {/* {item.overview} */}
      </CardText>
      
    </CardBody>
  </Card>
  )
}
