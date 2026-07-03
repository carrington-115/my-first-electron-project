import "./App.css";
import SystemChart from "./components/ReusableCharts";
import { useStatistics } from "./hooks/useStatistics";

const testData: Statistics[] = [
  { cpuUsage: 45, ramUsage: 62, storageUsage: 78 },
  { cpuUsage: 52, ramUsage: 68, storageUsage: 75 },
  { cpuUsage: 48, ramUsage: 71, storageUsage: 80 },
  { cpuUsage: 65, ramUsage: 75, storageUsage: 82 },
  { cpuUsage: 58, ramUsage: 70, storageUsage: 79 },
  { cpuUsage: 72, ramUsage: 81, storageUsage: 85 },
  { cpuUsage: 61, ramUsage: 74, storageUsage: 77 },
  { cpuUsage: 55, ramUsage: 69, storageUsage: 83 },
  { cpuUsage: 68, ramUsage: 78, storageUsage: 80 },
  { cpuUsage: 63, ramUsage: 76, storageUsage: 82 },
];

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
        <SystemChart data={testData} />
      </div>
    </>
  );
}

export default App;
