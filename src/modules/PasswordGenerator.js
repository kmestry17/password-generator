import React, { useState } from "react";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
import axios from "axios";

const PasswordGenerator = () => {
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");
  const [outputLabel, setOutputLabel] = useState("");

  const generatePassword = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/generate-password",
        {
          params: {
            length,
            includeNumbers,
            includeSymbols,
          },
        }
      );
      setOutputLabel("Generated Password:");
      setPassword(response.data.password);
    } catch (error) {
      setOutputLabel("Error Generating Password:");
      setPassword("API down. Please try again later.");
      console.error("Error generating password:", error);
    }
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="formLength">
          <Form.Label>Password Length</Form.Label>
          <InputGroup>
            <FormControl
              type="number"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              min="4"
              max="20"
            />
          </InputGroup>
        </Form.Group>
        <Form.Group controlId="formIncludeNumbers">
          <Form.Check
            type="checkbox"
            label="Include Numbers"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          />
        </Form.Group>
        <Form.Group controlId="formIncludeSymbols">
          <Form.Check
            type="checkbox"
            label="Include Symbols"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
          />
        </Form.Group>
        <Button variant="primary" onClick={generatePassword}>
          Generate Password
        </Button>
      </Form>
      {password && (
        <div className="mt-3">
          <h3>{outputLabel}</h3>
          <p className="alert alert-success">{password}</p>
        </div>
      )}
    </div>
  );
};

export default PasswordGenerator;
