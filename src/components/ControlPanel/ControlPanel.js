import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  ButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import TABS from "../../constants";

export default function ControlPanel({
  setTabItem,
  setSearchName,
  inputValue,
  currentTab,
}) {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Сортировать по</Navbar.Brand>
      <Nav className="mr-auto">
        <ButtonGroup toggle>
          {TABS.map((tab, idx) => (
            <ToggleButton
              key={idx}
              type="radio"
              variant="secondary"
              value={tab.value}
              checked={currentTab === tab.value}
              onChange={() => setTabItem(tab)}
            >
              {tab.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </Nav>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Иванов"
          className="mr-sm-2"
          value={inputValue}
          onChange={({ target }) => setSearchName(target.value)}
        />
        <Navbar.Brand>Найти атлета</Navbar.Brand>
      </Form>
    </Navbar>
  );
}
