import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Spinner,Col } from "reactstrap";
import { getLakiLaki } from "./lakiLakiSlice";
import CardLaki from "../../components/cardLaki";

export default function LakiLaki() {
    const {status, data} = useSelector((state) => state.lakiLaki);
    const dispatch = useDispatch();

    useEffect(() => {
        if (status === "idle"){
          dispatch(getLakiLaki());  
        }
            }, [status]);

    if (status === "loading") {
        return <Spinner  color="danger">;
            Loading...
        </Spinner>
     }
   console.log(data);
  return (
   <Container>
        <Row>
            {data.map((item,i) => (
                <Col key={i} xs="6" md="4" lg="3">
                    <CardLaki item={item}/>
                </Col>
            ))}
          
        </Row>
   </Container>
  );
}
