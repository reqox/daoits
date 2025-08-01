import { InfoCard } from '@/shared/ui';
import './Projecting.scss';

export const Projecting = () => {
  return (
    <section className={'projecting'}>
      <div className="projecting__inner container">
        <h2 className="projecting-title">
          Проектирование децентрализованного мира
        </h2>
        <InfoCard body="Повысим информационную безопасность компании и сотрудников" />
        <InfoCard body="Автоматизируем рабочие процессы смартконтрактами" />
        <InfoCard body="Перенесем ваш бизнес в блокчейн среду" />
        <InfoCard body="Анонимно и безопасно купим/продадим для вас цифровые финансовые активы" />
        <InfoCard body="Консультации профессиональных аналитиков, юристов и веб-специалистов" />
      </div>
    </section>
  );
};
