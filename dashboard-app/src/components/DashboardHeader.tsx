import styles from "./DashboardHeader.module.css";

type DashboardHeaderProps = {
  company: string;
  period: string;
};

export function DashboardHeader({ company, period }: DashboardHeaderProps) {
  return (
    <header className={styles.wrapper}>
      <div>
        <h1>{company}</h1>
        <p>
          Visão consolidada de desempenho com dados em tempo real de vendas, marketing e sucesso do
          cliente.
        </p>
      </div>
      <div className={styles.actions}>
        <span className={styles.period}>Período: {period}</span>
        <button type="button" className={styles.primary}>
          Exportar relatório
        </button>
        <button type="button" className={styles.secondary}>
          Compartilhar
        </button>
      </div>
    </header>
  );
}
