import styles from "./TeamPerformance.module.css";

type TeamMember = {
  name: string;
  role: string;
  avatarColor: string;
  deals: number;
  quotaProgress: number;
  variation: number;
};

type TeamPerformanceProps = {
  title: string;
  members: TeamMember[];
};

export function TeamPerformance({ title, members }: TeamPerformanceProps) {
  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <h3>{title}</h3>
        <span className={styles.caption}>Top performers</span>
      </header>
      <ul className={styles.list}>
        {members.map((member) => (
          <li key={member.name} className={styles.item}>
            <div className={styles.identity}>
              <span className={styles.avatar} style={{ background: member.avatarColor }}>
                {member.name
                  .split(" ")
                  .map((part) => part[0])
                  .slice(0, 2)
                  .join("")
                  .toUpperCase()}
              </span>
              <div>
                <strong>{member.name}</strong>
                <small>{member.role}</small>
              </div>
            </div>
            <div className={styles.deals}>
              <span>{member.deals}</span>
              <small>Negócios</small>
            </div>
            <div className={styles.progress}>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${Math.min(100, member.quotaProgress)}%` }}
                />
              </div>
              <small>{member.quotaProgress.toFixed(0)}% da meta</small>
            </div>
            <span className={member.variation >= 0 ? styles.positive : styles.negative}>
              {member.variation >= 0 ? "▲" : "▼"} {Math.abs(member.variation).toFixed(1)}%
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
