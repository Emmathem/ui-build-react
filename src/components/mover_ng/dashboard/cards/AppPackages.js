import React from 'react';
import Box1 from '../../../../assets/images/movers/box1.png';
import LocationImg from '../../../../assets/images/movers/location1.png';
import IncomeImg from '../../../../assets/images/movers/income1.png';
import WeightImg from '../../../../assets/images/movers/vector.png';
import { ccyFormatter } from '../../../../utils/miscelleous';

const AppPackages = () => {
  return (
    <section name="packages">
      <div className="cardbg packages">
        <div className="packages__box">
          <div>
            <h3>Delivered Packages</h3>
            <h2>{ccyFormatter(3254562)}</h2>
          </div>
          <div>
            <img src={Box1} />
          </div>
        </div>
      </div>
      <div className="cardbg packages">
        <div className="packages__box">
          <div>
            <h3>Travelled Kilometres</h3>
            <h2>{ccyFormatter(32241)}</h2>
          </div>
          <div>
            <img src={LocationImg} />
          </div>
        </div>
      </div>
      <div className="cardbg packages">
        <div className="packages__box">
          <div>
            <h3>Tons of Goods</h3>
            <h2>{ccyFormatter(32241)}</h2>
          </div>
          <div>
            <img src={WeightImg} />
          </div>
        </div>
      </div>
      <div className="cardbg packages">
        <div className="packages__box">
          <div>
            <h3>Income made</h3>
            <h2>N{ccyFormatter(4232241)}</h2>
          </div>
          <div>
            <img src={IncomeImg} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPackages;
