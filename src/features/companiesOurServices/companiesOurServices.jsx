import { HorizontalRule } from '@mui/icons-material';
import './companiesOurServices.style.css';
import {
  Circle,
  Fork,
  Lion,
  Panther,
  Tree,
  Wave,
  YinYang,
  Star,
  Coffee,
} from '../../assets';
import OneCompany from './components/oneCompany';

const companyData = [
  {
    img: <Circle />,
  },
  {
    img: <Fork />,
  },
  {
    img: <Coffee />,
  },
  {
    img: <Lion />,
  },
  {
    img: <Panther />,
  },
  {
    img: <Tree />,
  },
  {
    img: <Wave />,
  },
  {
    img: <YinYang />,
  },
  {
    img: <Star />,
  },
];

const CompaniesOurServices = () => {
  return (
    <div className="companiesOurServicesHolder">
      <div className="companiesOurServicesMiddle">
        <div className="companiesOurServicesLeft">
          <p className="trust">TRUST</p>
          <h1>COMPANIES WHO USES OUR SERVICES</h1>
          <HorizontalRule
            sx={{
              fontSize: '60px',
              color: '#d2b356',
            }}
          />
          <p>
            Countless companies have found success by using the services offered
            on our market landing page. From startups seeking to establish their
            digital presence to established enterprises looking to boost sales,
            our tailored solutions have proven instrumental. With our expertise,
            businesses of all sizes and industries have discovered the keys to
            market dominance and growth.
          </p>
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
