import { feedback, customerData } from '../../data/whatCustomersSaying';
import HorizontalLine from '../../components/horizontalLine/horizontalLine';
import OneCustomer from './components/oneCustomer';
import './customersSaying.style.css';

const CustomerSaying = () => {
  return (
    <div className="customerSayingHolder">
      <div className="customerSayingMiddle">
        <div className="customerSayingUpper">
          <p>{feedback.title}</p>
          <h1>{feedback.heading}</h1>
          <HorizontalLine />
        </div>
        <div className="customerSayingBottom">
          {customerData.map((customer) => {
            return (
              <OneCustomer
                img={customer.img}
                text={customer.text}
                customerName={customer.customerName}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CustomerSaying;
