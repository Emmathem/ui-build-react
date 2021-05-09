import React, { useState } from 'react';
import { DatePicker, Row, Col, Button } from 'antd';
import moment from 'moment';
import { ArrowUpward, ArrowDownward, ArrowRightAlt } from '@material-ui/icons';
import { useForm } from 'react-hook-form';
import { Line } from 'react-chartjs-2';
import { ccyFormatter, LOGGER } from '../../../../utils/miscelleous';

const AppDashboardGraph = () => {
  const newWeek = parseFloat(236024);
  const lastWeek = parseFloat(186024);

  const format = 'DD-MM-YYYY';

  const businessDate = moment();

  LOGGER('today date', moment().format(format));

  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();

  const applyFilter = data => {
    setLoading(!loading);
    LOGGER('data', data);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const dataObject = {
    labels: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    datasets: [
      {
        label: '',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: ['1k', '2k', '3k', '4k', '5k'],
      },
    ],
  };

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
              <div>
                <Row justify="space-between">
                  <Col span="11">
                    <DatePicker
                      {...register('startDate')}
                      defaultValue={moment(businessDate)}
                      format={format}
                    />
                  </Col>
                  <Col span="1">
                    <div className="dash">
                      <ArrowRightAlt />
                    </div>
                  </Col>
                  <Col span="11">
                    <DatePicker
                      {...register('endDate')}
                      defaultValue={moment(businessDate)}
                      format={format}
                    />
                  </Col>
                </Row>
              </div>
              <Button
                type="primary"
                loading={loading}
                onClick={handleSubmit(applyFilter)}
              >
                Apply Filters
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Graphical Represtation */}
      <div className="dashgraph__graph">
        {/* <h4>Graph Here</h4> */}
        <Line data={dataObject} />
      </div>
    </section>
  );
};

export default AppDashboardGraph;
