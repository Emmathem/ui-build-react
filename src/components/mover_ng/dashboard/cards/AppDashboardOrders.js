import React, { useState } from 'react';
import { MoreVert } from '@material-ui/icons';
import { Table } from 'antd';

const AppDashboardOrders = () => {
  const [loading, setloading] = useState(false);
  setTimeout(() => {
    setloading(false);
  }, 2000);

  const columns = [
    {
      title: 'Order Number',
      dataIndex: 'order_number',
      key: 'order_number',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Status',
      dataIndex: 'order_status',
      key: 'order_status',
    },
    {
      title: 'Updated',
      dataIndex: 'updated_at',
      key: 'updated_at',
    },
  ];

  const orderData = [
    {
      id: '1',
      name: 'Meredith Wunsch',
      order_name: 'Incredible Frozen Shirt',
      order_number: 3558,
      created_at: '2021-02-16T17:31:02.259Z',
      updated_at: '2021-05-09T12:45:56.629Z',
      order_status: 'Money Market Account panel Oregon',
    },
    {
      id: '2',
      name: 'Marilou Fisher',
      order_name: 'Rustic Fresh Fish',
      order_number: 18375,
      created_at: '2020-05-18T22:38:20.648Z',
      updated_at: '2021-05-09T17:04:57.286Z',
      order_status: 'Fresh Cocos (Keeling) Islands',
    },
    {
      id: '3',
      name: 'Maria Legros DDS',
      order_name: 'Ergonomic Metal Bacon',
      order_number: 54070,
      created_at: '2021-05-02T05:33:01.257Z',
      updated_at: '2021-05-09T11:36:05.562Z',
      order_status: 'Rubber',
    },
    {
      id: '4',
      name: 'Matteo Marvin',
      order_name: 'Ergonomic Rubber Shirt',
      order_number: 61727,
      created_at: '2020-08-11T22:25:52.655Z',
      updated_at: '2021-05-09T04:57:17.825Z',
      order_status: 'Kwacha',
    },
    {
      id: '5',
      name: 'Tyshawn Senger Jr.',
      order_name: 'Small Steel Pizza',
      order_number: 60908,
      created_at: '2020-09-22T10:26:16.324Z',
      updated_at: '2021-05-09T16:27:27.000Z',
      order_status: 'orange Open-architected',
    },
    {
      id: '6',
      name: 'Kenya Farrell',
      order_name: 'Generic Rubber Tuna',
      order_number: 37769,
      created_at: '2020-10-08T05:38:11.778Z',
      updated_at: '2021-05-09T13:58:09.493Z',
      order_status: 'Computers Buckinghamshire Electronics',
    },
    {
      id: '7',
      name: 'Mireille Ruecker',
      order_name: 'Practical Steel Shirt',
      order_number: 76357,
      created_at: '2020-05-14T12:29:19.144Z',
      updated_at: '2021-05-09T00:23:29.509Z',
      order_status: 'alliance Robust Awesome',
    },
    {
      id: '8',
      name: 'Vernie Wilkinson',
      order_name: 'Rustic Metal Pants',
      order_number: 42609,
      created_at: '2021-01-01T07:55:19.007Z',
      updated_at: '2021-05-09T01:49:55.868Z',
      order_status: 'bus Avon',
    },
    {
      id: '9',
      name: 'Mr. Arnold Stamm',
      order_name: 'Sleek Steel Chips',
      order_number: 62257,
      created_at: '2021-01-25T07:21:12.956Z',
      updated_at: '2021-05-09T05:37:41.110Z',
      order_status: 'feed Baht stable',
    },
    {
      id: '10',
      name: "Flavio D'Amore",
      order_name: 'Incredible Frozen Salad',
      order_number: 6204,
      created_at: '2020-10-24T23:30:57.521Z',
      updated_at: '2021-05-09T21:18:55.192Z',
      order_status: 'next generation ubiquitous invoice',
    },
  ];
  return (
    <section className="cardbg orders">
      <div className="orders__header">
        <h2>Recent Order Summary</h2>
        <div className="more">
          <MoreVert />
        </div>
      </div>
      <div className="orders__table">
        <Table
          columns={columns}
          loading={loading}
          dataSource={orderData}
          rowKey={(orderData, id) => id}
        />
      </div>
    </section>
  );
};

export default AppDashboardOrders;
