import { Button, Select } from 'antd';
import React from 'react';
import { Helmet } from 'react-helmet';
import '../../assets/css/freelancer.css';
import MobileBg from '../../assets/images/handsome-man-with-laptop.png';
import AppHeader from './AppHeader';
const { Option } = Select;

const AppFreelanceLanding = () => {
  return (
    <div className="freelancer">
      <Helmet>
        <title>Hire A Freelance | Welcome</title>
        <meta
          name="author"
          content="Developer: Temitope Falua, Designer: Gbolayo Olawumi"
        />
        <meta
          name="description"
          content="Get a freelance for your jobs... reliable and effective"
        />
      </Helmet>
      <AppHeader />
      <div className="freelancer__sideCol leftCol">
        <div className="mobileContent hideOnWeb">
          <div data-wow-delay="1s" data-wow-duration="2s">
            <h3>
              Find the perfect <i>freelancer</i>
            </h3>
            <h4>& Get Your Job Done</h4>
          </div>
          <div
            className="freeContent__details"
            data-wow-delay="1.4s"
            data-wow-duration="2s"
          >
            <div className="freeContent__group">
              <label>Select job category:</label>
              <Select defaultValue="Mobile App Development">
                <Option value="Mobile App Development">
                  Mobile App Development
                </Option>
              </Select>
            </div>
            <Button className="button" type="default" block>
              Find Experts
            </Button>
          </div>
        </div>
        <div className="freelancer__leftContent hideOnMobile">
          <div className="freelancer__designer">
            <h3>Temitope Falua</h3>
            <small>Frontend Developer</small>
            <div className="freelancer__lines">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="freelancer__sideCol rightCol">
        <div className="freeContent">
          <div className="freeContent__mobileBG hideOnWeb">
            <img src={MobileBg} alt="laptop" />
            <div className="freelancer__designer">
              <h3>Temitope Falua</h3>
              <small>Frontend Developer</small>
              <div className="freelancer__lines">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
          <div className="freeContent__inner hideOnMobile">
            <div
              className="wow animated fadeIn freeContent__header"
              data-wow-delay="1s"
              data-wow-duration="2s"
            >
              <h3>
                Find the perfect <i>freelancer</i>
              </h3>
              <h4>& Get Your Job Done</h4>
            </div>
            <div
              className="wow animated zoomIn freeContent__details"
              data-wow-delay="1.4s"
              data-wow-duration="2s"
            >
              <p>
                Whatever your needs, there will be a freelancer to get it done.
                It's easy. Simply post a job you need completed and receive
                competitive bids from freelancers within minutes.
              </p>

              <div className="freeContent__group">
                <label>Select job category:</label>
                <Select defaultValue="Mobile App Development">
                  <Option value="Mobile App Development">
                    Mobile App Development
                  </Option>
                </Select>
              </div>
              <Button className="button" type="default" block>
                Find Experts
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppFreelanceLanding;
