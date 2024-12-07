import "./App.css";
import { useState } from "react";
import Table from "./Table";

function App() {
  let [revenue, setRevenue] = useState();
  let [percentage, setPercentage] = useState();
  let [submit, setSubmit] = useState(false);

  let handleRevenue = (e) => {
    setRevenue(e.target.value);
  };

  let handelPercent = (e) => {
    setPercentage(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    if (!revenue || !percentage) {
      alert("please enter both revenue and percentage");
      return;
    }

    setSubmit(true);
    // setRevenue(" ");
    // setPercentage(" ");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Revenue Calculator</h1>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Enter revenue"
            type="number"
            min={1}
            className="inp-box"
            value={revenue}
            onChange={handleRevenue}
          ></input>
          <br></br>
          <input
            placeholder="Enter percentage growth"
            type="number"
            min={1}
            className="inp-box"
            value={percentage}
            onChange={handelPercent}
          ></input>
          <br></br>
          <button type="submit">Submit</button>
        </form>

        {submit ? (
          <Table revenue={revenue} percentage={percentage}></Table>
        ) : (
          " "
        )}
      </header>
    </div>
  );
}

export default App;