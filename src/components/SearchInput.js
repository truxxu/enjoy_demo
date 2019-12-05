import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function SearchInput() {
  return (
    <React.Fragment>
      <InputGroup className="App-Header-Search align-self-center mb-4 px-2">
        <FormControl
          placeholder="Buscar un servicio o un salón"
          aria-label="search"
          aria-describedby="basic-addon1"
      />
        <InputGroup.Append>
          <InputGroup.Text id="basic-addon1">
            <span className="icon-lupa"></span>
          </InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
    </React.Fragment>
  );
}

export default SearchInput;
