import './Services.scss';

export const Services = () => {
  return (
    <section className={'services'}>
      <div className="services__inner container">
        <div className="services__title">
          <div className="services__title-title"></div>
          <div className="services__title-subtitle"></div>
        </div>
        <div className="services__services">
          <ul className="services__services-list">
            <li className="services__services-item">
              <ServiceCard />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
