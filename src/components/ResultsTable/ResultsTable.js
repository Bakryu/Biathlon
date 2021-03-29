import React from "react";
import { Table, Spinner, Row } from "react-bootstrap";

export default function ResultsTable({ data, isDataLoaded }) {
  const athletesList = data.map(
    ({ place, athleteName, country, time, hit, rateFire }) => {
      return (
        <tr key={place}>
          <td>{place}</td>
          <td>{athleteName}</td>
          <td>{country}</td>
          <td>{time}</td>
          <td>{hit}</td>
          <td>{rateFire}</td>
        </tr>
      );
    }
  );

  if (isDataLoaded) {
    return (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Место</th>
            <th>Атлеты</th>
            <th>Страна</th>
            <th>Общее время</th>
            <th>Попадания</th>
            <th>Скорострельность</th>
          </tr>
        </thead>
        <tbody>{athletesList}</tbody>
      </Table>
    );
  }
  return (
    <Row className="justify-content-center mt-1">
      <Spinner animation="grow" />
    </Row>
  );
}
