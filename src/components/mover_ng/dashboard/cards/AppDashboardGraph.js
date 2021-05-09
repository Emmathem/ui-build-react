import React from 'react';
import { DatePicker, Button } from 'antd';
import { ArrowUpward, ArrowDownward } from '@material-ui/icons';
import { ccyFormatter } from '../../../../utils/miscelleous';

const AppDashboardGraph = () => {
  const newWeek = parseFloat(236024);
  const lastWeek = parseFloat(186024);
  return (
    <section className="cardbg dashgraph">
      <div className="cardbg__header dashgraph__header">
        <h1>Company Progress</h1>
        <div className="dashgraph__progressdetails">
          <div>
            <h3>Current Week</h3>
            <h2>
              N{ccyFormatter(newWeek)}
              {Math.ceil(newWeek) > Math.ceil(lastWeek) ? (
                <ArrowUpward style={{ color: '#71D875' }} />
              ) : (
                <ArrowDownward style={{ color: '#F00' }} />
              )}
            </h2>
          </div>
          <div>
            <h3>Last Week</h3>
            <h2>N{ccyFormatter(lastWeek)}</h2>
          </div>
          <div>
            <h3>Date Range</h3>
            <div className="dashgraph__range">
              <DatePicker.RangePicker></DatePicker.RangePicker>
              <Button type="primary">Apply Filter</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDashboardGraph;
