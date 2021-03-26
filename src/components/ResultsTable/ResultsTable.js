import React from "react";
import { Table } from "react-bootstrap";

export default function ResultsTable({ data }) {
  const athletesList = data.map(
    ({ place, athleteName, country, time, hit, rateFire }) => {
      return (
        <tr>
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
