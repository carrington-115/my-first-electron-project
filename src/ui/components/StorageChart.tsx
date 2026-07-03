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

const StorageChart = ({ data }: SystemChartProps) => {
  return (
    <div>
      <ResponsiveContainer width={500} height={550}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="storageUsage" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" domain={[0, 1500]} />
          <Tooltip />
          <Area
            type="natural"
            dataKey="storageUsage"
            stroke="#34D399"
            fill="#34D399"
            fillOpacity={0.6}
            name="Storage (%)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StorageChart;
