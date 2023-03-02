import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Spinner,Col } from "reactstrap";
import { getAllBatik } from "./allBatikSlice";
import CardBatik from "../../components/cardBatik";

export default function AllBatik() {
    const {status, data} = useSelector((state) => state.allBatik);
    const dispatch = useDispatch();

    useEffect(() => {
        if (status === "idle"){
          dispatch(getAllBatik());  
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
                    <CardBatik item={item}/>
                </Col>
            ))}
          
        </Row>
   </Container>
  );
}
