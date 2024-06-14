import React, { useState } from "react";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";

const PasswordGenerator = () => {
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let characters = letters;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
    }

    setPassword(generatedPassword);
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
          <h3>Your Password:</h3>
          <p className="alert alert-success">{password}</p>
        </div>
      )}
    </div>
  );
};

export default PasswordGenerator;
