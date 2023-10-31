import { HorizontalRule } from '@mui/icons-material';
import './customersSaying.style.css';
import OneCustomer from './components/oneCustomer';
import { JaredPadalecki, JonBernthal, MikeKripke } from '../../assets';

const customerData = [
  {
    img: <JaredPadalecki />,
    customerName: 'Jared Padalecki - Happy Customer',
    text: "I'm thrilled with the product I purchased; it exceeded my expectations! The quality is outstanding, and the customer support was incredibly responsive. I couldn't be happier with my experience.",
  },
  {
    img: <JonBernthal />,
    customerName: 'Jon Bernthal - Happy Customer',
    text: 'The service provided by this company has been exceptional from start to finish. I am a delighted customer, thanks to their professionalism and the high-quality product I received. I highly recommend!',
  },
  {
    img: <MikeKripke />,
    customerName: 'Mike Kripke - Happy Customer',
    text: "I can't express how satisfied I am with my purchase. The product's quality is top-notch, and the customer service was impeccable. This company truly knows how to make their customers happy.",
  },
];

const CustomerSaying = () => {
  return (
    <div className="customerSayingHolder">
      <div className="customerSayingMiddle">
        <div className="customerSayingUpper">
          <p>FEEDBACK</p>
          <h1>WHAT ARE OUR CUSTOMERS SAYING</h1>
          <HorizontalRule
            sx={{
              fontSize: '60px',
              color: '#d2b356',
            }}
          />
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
