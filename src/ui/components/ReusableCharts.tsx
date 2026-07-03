import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type SystemChartProps = {
  data: Statistics[];
};

const SystemChart = ({ data }: SystemChartProps) => {
  return (
    <div>
      <ResponsiveContainer width={700} height={550}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="cpuUsage" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" domain={[0, 1]} />
          <Tooltip />

          <Area
            type="natural"
            dataKey="cpuUsage"
            stroke="#F87171"
            fill="#F87171"
            fillOpacity={0.6}
            name="CPU (%)"
          />
          <Area
            type="natural"
            dataKey="ramUsage"
            stroke="#60A5FA"
            fill="#60A5FA"
            fillOpacity={0.6}
            name="RAM (%)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SystemChart;
