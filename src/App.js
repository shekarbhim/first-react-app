// import Expenses from "./components/Expenses";
import "./App.css";
// import Login from "./components/login/login";
import Registration from "./components/registration";
import Stack from "@mui/material/Stack";
import Header from "./components/header";
function App() {
  // const expenses = [
  //   {
  //     id: "e1",
  //     title: "Toilet Paper",
  //     amount: 94.12,
  //     date: new Date(2020, 7, 14),
  //   },
  //   {
  //     id: "e2",
  //     title: "New TV",
  //     amount: 799.49,
  //     date: new Date(2021, 2, 12),
  //   },
  //   {
  //     id: "e3",
  //     title: "Car Insurance",
  //     amount: 294.67,
  //     date: new Date(2021, 2, 28),
  //   },
  //   {
  //     id: "e4",
  //     title: "New Desk (Wooden)",
  //     amount: 450,
  //     date: new Date(2021, 5, 12),
  //   },
  // ];
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div className="middle-container">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={1}
          style={{ width: "100%" }}
        >
          <Registration />
        </Stack>
      </div>
      <div className="footer">Footer</div>
    </div>
  );
}

export default App;
