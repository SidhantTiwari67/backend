import express from "express";
const app = express();

// app.get("/jokes", (req, res) => {
//   const jokes = [
//     {
//       id: 1,
//       title: "First joke",
//       content: "This is a joke",
//     },
//     {
//       id: 2,
//       title: "Second joke",
//       content: "This is first joke",
//     },
//     {
//       id: 3,
//       title: "Third joke",
//       content: "This is third joke",
//     },
//     {
//       id: 4,
//       title: "Fourth joke",
//       content: "This is fourth joke",
//     },
//   ];
//   res.send(jokes);
// });

// Standard way:
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "First joke",
      content: "This is a joke",
    },
    {
      id: 2,
      title: "Second joke",
      content: "This is first joke",
    },
    {
      id: 3,
      title: "Third joke",
      content: "This is third joke",
    },
    {
      id: 4,
      title: "Fourth joke",
      content: "This is fourth joke",
    },
  ];
  res.send(jokes);
});

app.get("/", (req, res) => {
  console.log("Root route");
});

const port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
  console.log("Server connected at port 3000");
});
