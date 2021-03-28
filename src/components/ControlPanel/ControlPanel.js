import React from "react";
import {
  Button,
  Navbar,
  Nav,
  Form,
  FormControl,
  ButtonGroup,
  ToggleButton,
} from "react-bootstrap";

export default function ControlPanel({
  searchList,
  radioValue,
  setRadioValue,
  setSearchName,
  searchName,
  setOrder,
  findAthlete,
}) {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Сортировать по</Navbar.Brand>
      <Nav className="mr-auto">
        <ButtonGroup toggle>
          {searchList.map((radio, idx) => (
            <ToggleButton
              key={idx}
              type="radio"
              variant="secondary"
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={({ currentTarget }) =>
                setRadioValue(currentTarget.value)
              }
              onClick={() => setOrder(radio.order)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </Nav>
      <Form inline onSubmit={findAthlete}>
        <FormControl
          type="text"
          placeholder="Иванов"
          className="mr-sm-2"
          value={searchName}
          onChange={({ target }) => setSearchName(target.value)}
        />
        <Button variant="outline-info">Найти атлета</Button>
      </Form>
    </Navbar>
  );
}
