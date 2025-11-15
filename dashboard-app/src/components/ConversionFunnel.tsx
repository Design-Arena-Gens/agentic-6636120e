import styles from "./ConversionFunnel.module.css";

type FunnelStage = {
  label: string;
  value: number;
  change: number;
};

type ConversionFunnelProps = {
  title: string;
  stages: FunnelStage[];
};

export function ConversionFunnel({ title, stages }: ConversionFunnelProps) {
  const max = Math.max(...stages.map((stage) => stage.value));

  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <h3>{title}</h3>
        <span className={styles.caption}>Funil semanal</span>
      </header>
      <div className={styles.funnel}>
        {stages.map((stage, index) => {
          const width = (stage.value / max) * 100;
          const accent = styles[`stage${index + 1}` as keyof typeof styles] ?? "";
          const status =
            stage.change > 0 ? styles.positive : stage.change < 0 ? styles.negative : styles.neutral;

          return (
            <div key={stage.label} className={styles.stageRow}>
              <div className={`${styles.stageBar} ${accent}`}>
                <div className={styles.fill} style={{ width: `${width}%` }} />
              </div>
              <div className={styles.meta}>
                <span className={styles.label}>{stage.label}</span>
                <span className={styles.value}>{stage.value.toLocaleString("pt-BR")}</span>
                <span className={status}>
                  {stage.change > 0 ? "▲" : stage.change < 0 ? "▼" : "—"}{" "}
                  {Math.abs(stage.change).toFixed(1)}%
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
