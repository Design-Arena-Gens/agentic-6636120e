"use client";

import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styles from "./TrendAreaChart.module.css";

type TrendPoint = {
  label: string;
  value: number;
  projection?: number;
};

type TrendAreaChartProps = {
  title: string;
  subtitle: string;
  data: TrendPoint[];
};

export function TrendAreaChart({ title, subtitle, data }: TrendAreaChartProps) {
  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <div>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
        <span className={styles.tag}>Últimos 12 meses</span>
      </header>
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="trendPrimary" x1="0" y1="0" x2="0" y2="1">
              <stop offset="15%" stopColor="#2563eb" stopOpacity={0.85} />
              <stop offset="100%" stopColor="#2563eb" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="trendProjection" x1="0" y1="0" x2="0" y2="1">
              <stop offset="15%" stopColor="#a855f7" stopOpacity={0.65} />
              <stop offset="100%" stopColor="#a855f7" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="label"
            tickLine={false}
            axisLine={{ stroke: "var(--border)" }}
            tick={{ fill: "var(--text-subtle)", fontSize: 12 }}
            interval={1}
          />
          <YAxis
            tickLine={false}
            axisLine={{ stroke: "var(--border)" }}
            tick={{ fill: "var(--text-subtle)", fontSize: 12 }}
            tickFormatter={(value) => `R$ ${value.toLocaleString("pt-BR")}`}
          />
          <Tooltip
            cursor={{ stroke: "var(--border)", strokeWidth: 1.2 }}
            contentStyle={{
              borderRadius: "0.75rem",
              border: "1px solid var(--border)",
              background: "var(--surface)",
              boxShadow: "var(--shadow-md)",
            }}
            formatter={(value: number, name: string) => [
              `R$ ${value.toLocaleString("pt-BR")}`,
              name === "value" ? "Receita" : "Projeção",
            ]}
          />
          <Area
            dataKey="value"
            stroke="#1d4ed8"
            strokeWidth={3}
            fill="url(#trendPrimary)"
            name="Receita"
          />
          <Area
            dataKey="projection"
            stroke="#8b5cf6"
            strokeDasharray="6 6"
            strokeWidth={2}
            fill="url(#trendProjection)"
            name="Projeção"
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </section>
  );
}
