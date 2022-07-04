import "./App.css";
import CreateProfile from "./components/Profile/CreateProfile";

function App() {
  return (
    <div className="App">
      <img
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDUiIGhlaWdodD0iMjYiIHZpZXdCb3g9IjAgMCAxMDUgMjYiPgogICAgPGcgZmlsbD0iIzEwODlGNSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNMzMuNjMyIDUuMTc2aDQuMzkydjYuODY0aDYuNzkyVjUuMTc2aDQuMzkyVjIyaC00LjM5MnYtNi40NTZoLTYuNzkyVjIyaC00LjM5MlY1LjE3NnptMjMuMjg0IDBoNC4zOTJWMjJoLTQuMzkyVjUuMTc2em0xMC40MiAwaDQuNzI5bDQuMiAxMi4xNjggNC4yMjQtMTIuMTY4SDg1TDc4LjQyNSAyMmgtNC41Nkw2Ny4zMzcgNS4xNzZ6bTIzLjY5MyAwaDEzLjI3MlY4LjY4aC04Ljg4djMuMTQ0aDguMDE2djMuNDhsLTguMDE2LjAyNHYzLjE2OGg5LjEyVjIySDkxLjAzVjUuMTc2eiIvPgogICAgICAgIDxyZWN0IHdpZHRoPSI2IiBoZWlnaHQ9IjI2IiB4PSI5IiByeD0iMyIvPgogICAgICAgIDxyZWN0IHdpZHRoPSI2IiBoZWlnaHQ9IjE2IiB5PSI1IiByeD0iMyIvPgogICAgICAgIDxyZWN0IHdpZHRoPSI2IiBoZWlnaHQ9IjE2IiB4PSIxOCIgeT0iNSIgcng9IjMiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
        alt="Hive"
      ></img>
      <h1>CREATE PROFILE</h1>
      <CreateProfile />
      <a href="https://github.com/jbeanz" target="blank">
        Github source code!
      </a>
    </div>
  );
}

export default App;
