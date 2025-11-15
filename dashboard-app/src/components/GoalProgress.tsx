import styles from "./GoalProgress.module.css";

type Goal = {
  title: string;
  progress: number;
  target: number;
  owner: string;
  due: string;
};

type GoalProgressProps = {
  title: string;
  goals: Goal[];
};

export function GoalProgress({ title, goals }: GoalProgressProps) {
  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <h3>{title}</h3>
        <span className={styles.caption}>Atualizado automaticamente</span>
      </header>
      <div className={styles.grid}>
        {goals.map((goal) => {
          const pct = Math.min(100, Math.round((goal.progress / goal.target) * 100));

          return (
            <article key={goal.title} className={styles.card}>
              <div className={styles.top}>
                <span className={styles.badge}>{goal.owner}</span>
                <span className={pct >= 100 ? styles.done : styles.pending}>
                  {pct >= 100 ? "Concluído" : `Faltam ${(goal.target - goal.progress).toLocaleString("pt-BR")}`}
                </span>
              </div>
              <h4>{goal.title}</h4>
              <div className={styles.progress}>
                <div className={styles.track}>
                  <div className={styles.fill} style={{ width: `${pct}%` }} />
                </div>
                <span>{pct}%</span>
              </div>
              <footer className={styles.footer}>
                <span>Meta: {goal.target.toLocaleString("pt-BR")}</span>
                <span>Prazo: {goal.due}</span>
              </footer>
            </article>
          );
        })}
      </div>
    </section>
  );
}
