const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());

const generatePassword = (length, includeNumbers, includeSymbols) => {
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

  return generatedPassword;
};

app.get("/generate-password", (req, res) => {
  const { length, includeNumbers, includeSymbols } = req.query;
  const password = generatePassword(
    parseInt(length),
    includeNumbers === "true",
    includeSymbols === "true"
  );
  res.json({ password });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
