import HorizontalRule from '@mui/icons-material/HorizontalRule';
import '../style/oneCustomer.style.css';

const OneCustomer = ({ img, text, customerName }) => {
  return (
    <div className="oneCustomerHolder">
      {img}
      <p className="customerReview">{text}</p>
      <HorizontalRule
        sx={{
          fontSize: '60px',
          color: '#d2b356',
        }}
      />
      <p className="reviewerName">{customerName}</p>
    </div>
  );
};

export default OneCustomer;
