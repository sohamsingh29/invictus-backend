const app = require("express")();
const cors = require("cors");
const { encodeString, decodeString } = require("./helper");

app.use(cors());

app.get("/api/", (req, res) => {
  res.json({
    encode: "https://invictus-backend.vercel.app/api/encode/yourString",
    decode: "https://invictus-backend.vercel.app/api/decode/yourString",
  });
});

app.get("/api/encode/:string", (req, res) => {
  let string = req.params.string;
  let encoded = encodeString(string);
  res.json({ encoded });
});

app.get("/api/decode/:string", (req, res) => {
  let string = req.params.string;
  let decoded = decodeString(string);

  res.json({ decoded });
});

app.listen(3000, () => console.log("server running at http://localhost:3000"));
module.exports = app;
