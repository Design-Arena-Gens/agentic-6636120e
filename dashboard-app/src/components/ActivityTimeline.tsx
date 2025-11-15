import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import styles from "./ActivityTimeline.module.css";

type ActivityItem = {
  id: string;
  title: string;
  description: string;
  timestamp: Date;
  category: "vendas" | "marketing" | "produto" | "suporte";
};

type ActivityTimelineProps = {
  title: string;
  items: ActivityItem[];
};

const categoryLabels: Record<ActivityItem["category"], string> = {
  vendas: "Vendas",
  marketing: "Marketing",
  produto: "Produto",
  suporte: "Suporte",
};

export function ActivityTimeline({ title, items }: ActivityTimelineProps) {
  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <h3>{title}</h3>
        <span className={styles.meta}>{items.length} eventos recentes</span>
      </header>
      <ol className={styles.timeline}>
        {items.map((item, idx) => (
          <li key={item.id} className={styles.item}>
            <div className={styles.marker} data-category={item.category} />
            <div className={styles.content}>
              <div className={styles.topRow}>
                <span className={styles.category}>{categoryLabels[item.category]}</span>
                <time>
                  {formatDistanceToNow(item.timestamp, {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </time>
              </div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <span className={styles.exactDate}>
                {format(item.timestamp, "dd 'de' MMMM 'às' HH:mm", { locale: ptBR })}
              </span>
            </div>
            {idx < items.length - 1 && <div className={styles.connector} />}
          </li>
        ))}
      </ol>
    </section>
  );
}
