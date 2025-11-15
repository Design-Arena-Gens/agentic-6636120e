import styles from "./MetricCard.module.css";

type MetricCardProps = {
  title: string;
  value: string;
  change: number;
  trend?: "up" | "down";
  accent?: string;
};

export function MetricCard({
  title,
  value,
  change,
  trend = "up",
  accent = "var(--accent-blue)",
}: MetricCardProps) {
  const formattedChange = `${trend === "down" ? "▼" : "▲"} ${Math.abs(change).toFixed(1)}%`;

  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <span className={styles.bar} style={{ background: accent }} />
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.value}>{value}</div>
      <div className={trend === "down" ? styles.negative : styles.positive}>
        {formattedChange} vs. último período
      </div>
    </article>
  );
}
