const app = require("express")();
const { encodeString, decodeString } = require("./helper");
app.get("/", (req, res) => {
  res.json({
    encode: "http://localhost:3000/encode/yourString",
    decode: "http://localhost:3000/encode/yourString",
  });
});

app.get("/encode/:string", (req, res) => {
  let string = req.params.string;
  let encoded = encodeString(string);
  res.json({encoded});
});

app.get("/decode/:string", (req, res) => {
  let string = req.params.string;
  let decoded = decodeString(string);

  res.json({decoded});
});

app.listen(3000, () => console.log("server running at http://localhost:3000"));
