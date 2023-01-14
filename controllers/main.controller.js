const Redirect = require("../models/redirect.model")
import jwt from "jsonwebtoken";

const token = jwt.sign(
    { email: "erdem@gmail.com", id: "Erdm1" },
    process.env.JWT_SECRET || "defaultSecret",
    { expiresIn: "1d" }
  );
  
  jwt.verify(token, process.env.JWT_SECRET || "defaultSecret", (err, result) => {
    if (err) return err;
    return result;
  });