import { ActivityTimeline } from "@/components/ActivityTimeline";
import { ConversionFunnel } from "@/components/ConversionFunnel";
import { DashboardHeader } from "@/components/DashboardHeader";
import { GoalProgress } from "@/components/GoalProgress";
import { MetricCard } from "@/components/MetricCard";
import { TeamPerformance } from "@/components/TeamPerformance";
import { TrendAreaChart } from "@/components/TrendAreaChart";
import styles from "./page.module.css";

const metrics = [
  {
    title: "Receita Recorrente Mensal",
    value: "R$ 482.900",
    change: 18.6,
    trend: "up" as const,
    accent: "linear-gradient(135deg, #2563eb, #1d4ed8)",
  },
  {
    title: "Taxa de Conversão",
    value: "24,3%",
    change: 3.2,
    trend: "up" as const,
    accent: "linear-gradient(135deg, #22c55e, #16a34a)",
  },
  {
    title: "Clientes Ativos",
    value: "1.742",
    change: -1.8,
    trend: "down" as const,
    accent: "linear-gradient(135deg, #f97316, #ea580c)",
  },
  {
    title: "NPS Médio",
    value: "68",
    change: 5.4,
    trend: "up" as const,
    accent: "linear-gradient(135deg, #a855f7, #7c3aed)",
  },
];

const revenueTrend = [
  { label: "Jan", value: 201000 },
  { label: "Fev", value: 217400 },
  { label: "Mar", value: 246800 },
  { label: "Abr", value: 268200 },
  { label: "Mai", value: 288900 },
  { label: "Jun", value: 301400 },
  { label: "Jul", value: 326700 },
  { label: "Ago", value: 349500 },
  { label: "Set", value: 362400 },
  { label: "Out", value: 394800 },
  { label: "Nov", value: 421300 },
  { label: "Dez", value: 452900, projection: 482900 },
];

const funnelStages = [
  { label: "Visitantes", value: 32840, change: 8.1 },
  { label: "Leads Qualificados", value: 6240, change: 5.4 },
  { label: "Oportunidades", value: 1820, change: 2.7 },
  { label: "Clientes", value: 452, change: 1.3 },
];

const activities = [
  {
    id: "1",
    title: "Fechamento de contrato Enterprise",
    description: "Parceria com Grupo Borealis garante expansão para o mercado financeiro.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6),
    category: "vendas" as const,
  },
  {
    id: "2",
    title: "Campanha inbound otimizada",
    description: "Sequência automatizada gerou aumento de 38% na taxa de abertura.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 22),
    category: "marketing" as const,
  },
  {
    id: "3",
    title: "Roadmap de produto priorizado",
    description: "Time definiu entregas do trimestre com foco em IA assistiva.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 30),
    category: "produto" as const,
  },
  {
    id: "4",
    title: "Renovação com upgrade",
    description: "Cliente Atlas Logistics ampliou contrato para plano Growth.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 50),
    category: "suporte" as const,
  },
];

const goals = [
  {
    title: "Expandir receita enterprise",
    progress: 14,
    target: 18,
    owner: "Gabriela",
    due: "Dez 20",
  },
  {
    title: "Reduzir churn mensal",
    progress: 2.1,
    target: 3,
    owner: "Caio",
    due: "Jan 10",
  },
  {
    title: "Lançar hub de integrações",
    progress: 5,
    target: 6,
    owner: "Júlia",
    due: "Dez 05",
  },
  {
    title: "Campanha LATAM ABM",
    progress: 820,
    target: 1000,
    owner: "Renato",
    due: "Nov 28",
  },
];

const team = [
  {
    name: "Marcos Silva",
    role: "Account Executive",
    avatarColor: "linear-gradient(135deg, #2563eb, #1e3a8a)",
    deals: 18,
    quotaProgress: 112,
    variation: 9.4,
  },
  {
    name: "Ana Paula",
    role: "Account Manager",
    avatarColor: "linear-gradient(135deg, #f97316, #ea580c)",
    deals: 14,
    quotaProgress: 97,
    variation: 4.3,
  },
  {
    name: "Lucas Mendes",
    role: "Sales Development",
    avatarColor: "linear-gradient(135deg, #22c55e, #16a34a)",
    deals: 26,
    quotaProgress: 104,
    variation: -2.1,
  },
  {
    name: "Carla Souza",
    role: "Customer Success",
    avatarColor: "linear-gradient(135deg, #a855f7, #7c3aed)",
    deals: 11,
    quotaProgress: 132,
    variation: 6.8,
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <DashboardHeader company="Aurora Analytics" period="Jan — Dez 2024" />

      <section className={styles.metricsGrid}>
        {metrics.map((metric) => (
          <MetricCard
            key={metric.title}
            title={metric.title}
            value={metric.value}
            change={metric.change}
            trend={metric.trend}
            accent={metric.accent}
          />
        ))}
      </section>

      <section className={styles.chartsGrid}>
        <TrendAreaChart
          title="Receita recorrente acumulada"
          subtitle="Ritmo de crescimento e projeção anual"
          data={revenueTrend}
        />
        <ConversionFunnel title="Jornada de conversão" stages={funnelStages} />
      </section>

      <section className={styles.bottomGrid}>
        <ActivityTimeline title="Atividades estratégicas" items={activities} />
        <TeamPerformance title="Performance da equipe" members={team} />
      </section>

      <div className={styles.fullWidth}>
        <GoalProgress title="Metas prioritárias" goals={goals} />
      </div>
    </div>
  );
}
