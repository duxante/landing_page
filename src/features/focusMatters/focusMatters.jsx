import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import './focusMatters.style.css';
import Button from '../../components/button/button';
import { AfroSamurai } from '../../assets';

const FocusMatters = () => {
  return (
    <div className="focusMattersHolder">
      <div className="focusMattersMiddle">
        <div className="focusMattersLeftSide">
          <p>
            "I couldn't be happier with the results of our marketing campaign.
            Thanks to their expert team, we saw a substantial increase in leads
            and a boost in our ROI. Their personalized approach and data-driven
            strategies made all the difference!"
          </p>
          <p className="johnDoe">- John Doe, Happy Customer</p>
        </div>
        <div className="focusMattersRightSide">
          <div className="textAndAfro">
            <div className="believingText">
              <p className="believing">BELIEVING</p>
              <h1>FOCUS ON WHAT MATTERS MOST</h1>
              <HorizontalRuleIcon
                sx={{
                  fontSize: '60px',
                  color: '#d2b356',
                }}
              />
              <p className="firstP">
                In the fast-paced digital landscape of the modern market,
                attention is a precious commodity. A market landing page,
                designed to engage and convert visitors, must be a masterclass
                in focus.
              </p>
              <p>
                A focused landing page can be compared to a well-crafted story;
                it has a clear beginning, middle, and end. The headline and
                visuals serve as the opening hook, drawing the visitor in. The
                body content provides the narrative, explaining the benefits and
                value proposition of the product or service.
              </p>
              <p>
                By crafting landing pages with a laser-like focus, businesses
                can improve their conversion rates and achieve a higher ROI on
                their marketing efforts.
              </p>
              <Button buttonText="Watch video" />
            </div>
            <AfroSamurai />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FocusMatters;
