import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Политика конфиденциальности — Наталья Сиголович",
  description: "Политика конфиденциальности сайта Натальи Сигович — консультанта по детско-родительским отношениям.",
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section style={{ marginBottom: 32 }}>
    <h2 style={{ fontFamily: "var(--font-rubik, sans-serif)", fontWeight: 500, fontSize: 20, color: "#0a0a0a", marginBottom: 10 }}>{title}</h2>
    <div style={{ fontSize: 15, lineHeight: 1.75, color: "#3a3a3a" }}>{children}</div>
  </section>
);

export default function PrivacyPage() {
  return (
    <main style={{ background: "#fffaf0", minHeight: "100vh" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "48px 24px 96px" }}>
        <Link
          href="/"
          style={{ fontSize: 14, color: "#6a6a6a", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 40 }}
        >
          ← На главную
        </Link>

        <h1 style={{ fontFamily: "var(--font-rubik, sans-serif)", fontWeight: 500, fontSize: "clamp(28px, 5vw, 40px)", letterSpacing: "-1px", color: "#0a0a0a", marginBottom: 8 }}>
          Политика конфиденциальности
        </h1>
        <p style={{ fontSize: 14, color: "#8a8a8a", marginBottom: 48, borderBottom: "1px solid #efe7d6", paddingBottom: 24 }}>
          Обновлено: июнь 2025 · מדיניות פרטיות
        </p>

        <Section title="1. Общие положения">
          <p>Настоящая политика конфиденциальности описывает, как Наталья Сиголович («я», «консультант») обрабатывает личные данные посетителей сайта. Используя сайт, вы соглашаетесь с условиями данной политики.</p>
        </Section>

        <Section title="2. Какие данные собираются">
          <p style={{ marginBottom: 10 }}>Сайт не собирает личные данные автоматически и не использует системы аналитики третьих сторон (Google Analytics и т.п.).</p>
          <p style={{ marginBottom: 10 }}>Данные могут быть переданы добровольно, если вы:</p>
          <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6 }}>
            <li>Пишете мне в Telegram или WhatsApp для записи на консультацию;</li>
            <li>Отправляете письмо на адрес natashasigolovich@gmail.com.</li>
          </ul>
          <p style={{ marginTop: 10 }}>В этом случае обрабатываются: имя, контактные данные, и информация, которую вы сообщаете в переписке.</p>
        </Section>

        <Section title="3. Файлы cookie">
          <p style={{ marginBottom: 10 }}>Сайт использует только технические cookie, необходимые для работы (например, запоминание вашего выбора языка и согласия с политикой cookie). Аналитические или маркетинговые cookie не используются.</p>
          <p>Вы можете в любой момент очистить cookie в настройках браузера.</p>
        </Section>

        <Section title="4. Как используются данные">
          <p>Данные, которые вы передаёте при записи на консультацию, используются исключительно для связи с вами и проведения консультации. Данные не передаются третьим лицам, не продаются и не используются в маркетинговых целях.</p>
        </Section>

        <Section title="5. Хранение данных">
          <p>Переписка хранится в мессенджерах (Telegram, WhatsApp) и почте согласно политикам этих сервисов. Я не храню ваши данные на отдельных серверах.</p>
        </Section>

        <Section title="6. Ваши права">
          <p style={{ marginBottom: 10 }}>В соответствии с применимым законодательством (в т.ч. GDPR и Законом о защите персональных данных Израиля) вы имеете право:</p>
          <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6 }}>
            <li>Запросить доступ к своим данным;</li>
            <li>Потребовать исправления или удаления данных;</li>
            <li>Отозвать согласие на обработку данных.</li>
          </ul>
          <p style={{ marginTop: 10 }}>Для реализации своих прав свяжитесь по адресу: <a href="mailto:natashasigolovich@gmail.com" style={{ color: "#1a3a3a" }}>natashasigolovich@gmail.com</a></p>
        </Section>

        <Section title="7. Изменения политики">
          <p>Я оставляю за собой право обновлять настоящую политику. Дата последнего обновления указана в начале страницы.</p>
        </Section>

        <Section title="8. Контакты">
          <p>
            Наталья Сиголович<br />
            <a href="mailto:natashasigolovich@gmail.com" style={{ color: "#1a3a3a" }}>natashasigolovich@gmail.com</a><br />
            +972 52-454-8345
          </p>
        </Section>

        <div style={{ marginTop: 48, paddingTop: 24, borderTop: "1px solid #efe7d6" }}>
          <Link href="/" style={{ fontSize: 14, color: "#6a6a6a", textDecoration: "none" }}>← На главную</Link>
        </div>
      </div>
    </main>
  );
}
