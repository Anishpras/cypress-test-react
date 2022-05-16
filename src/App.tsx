import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  return (
    <div className="w-screen">
      <form
        action=""
        className="mt-20 flex flex-col justify-center items-center text-3xl gap-4">
        <div className="flex justify-around w-[500px]">
          {" "}
          <label>Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-black"
          />
        </div>
        <div className="flex justify-around items-center w-[500px]">
          {" "}
          <label>Email:</label>
          <input
            className="border border-black"
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div className="flex justify-around items-center w-[500px]">
          {" "}
          <label>Password:</label>
          <input
            className="border border-black"
            type="password"
            name="password"
            id="password"
          />
        </div>
      </form>
    </div>
  );
}

export default App;
