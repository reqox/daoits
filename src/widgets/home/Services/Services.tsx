import { ServiceCard } from '@/shared/ui';
import './Services.scss';
import {
  Services1Image,
  Services2Image,
  Services3Image,
} from '@/shared/assets/images';

export const Services = () => {
  return (
    <section className={'services'}>
      <div className="services__inner container">
        <div className="services__title">
          <h2 className="services__title-title">Решения для вас</h2>
          <div className="services__title-subtitle">
            Комплексные IT-услуги для вашего бизнеса
          </div>
        </div>
        <ul className="services-list">
          <li className="services-item">
            <ServiceCard
              srcImg={Services3Image}
              title={'Разработка сайтов'}
              description={'Для внедрения иновационных технологий'}
            />
          </li>
          <li className="services-item">
            <ServiceCard
              srcImg={Services2Image}
              title={'Разработка блокчейн-решений'}
              description={'Децентрализация бизнес-процессов.'}
            />
          </li>
          <li className="services-item">
            <ServiceCard
              srcImg={Services1Image}
              title={'Стратегия и запуск криптопроектов'}
              description={'От whitepaper и токеномики до маркетинга.'}
            />
          </li>
        </ul>
      </div>
    </section>
  );
};
