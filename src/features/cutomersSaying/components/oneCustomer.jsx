import HorizontalLine from '../../../components/horizontalLine/horizontalLine';
import '../style/oneCustomer.style.css';

const OneCustomer = ({ img, text, customerName }) => {
  return (
    <div className="oneCustomerHolder">
      {img}
      <p className="customerReview">{text}</p>
      <HorizontalLine />
      <p className="reviewerName">{customerName}</p>
      <hr className="reviewerBottomLine" />
    </div>
  );
};

export default OneCustomer;
