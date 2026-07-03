import "./App.css";
import SystemChart from "./components/ReusableCharts";
import StorageChart from "./components/StorageChart";
import { useStatistics } from "./hooks/useStatistics";

function App() {
  const statistics = useStatistics(10);
  console.log(statistics);
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            paddingBottom: 20,
            borderBottomWidth: 1,
            borderColor: "white",
          }}
        >
          <h2>System Resources</h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
            }}
          >
            <h3>RAM usage</h3>
            <h3>CPU usage</h3>
            <h3>Storage</h3>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <SystemChart data={statistics} />
          <StorageChart data={statistics} />
        </div>
      </div>
    </>
  );
}

export default App;
