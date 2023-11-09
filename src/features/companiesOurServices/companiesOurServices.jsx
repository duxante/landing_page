import { trust, companyData } from '../../data/trust';
import HorizontalLine from '../../components/horizontalLine/horizontalLine';
import OneCompany from './components/oneCompany';
import './companiesOurServices.style.css';

const CompaniesOurServices = () => {
  return (
    <div className="companiesOurServicesHolder">
      <div className="companiesOurServicesMiddle">
        <div className="companiesOurServicesLeft">
          <p className="trust">{trust.title}</p>
          <h1>{trust.heading}</h1>
          <HorizontalLine />
          <p>{trust.description}</p>
        </div>
        <div className="companiesOurServicesRight">
          {companyData.map((company) => {
            return <OneCompany img={company.img} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CompaniesOurServices;
