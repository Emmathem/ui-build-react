import { Row, Col, Card } from 'antd';
import React from 'react';
import AppBackHome from './AppBackHome';
import { LOGGER } from '../utils/miscelleous';

const TestScript = () => {
  const factorial = number => {
    let product = 1;
    for (let i = 2; i <= number; i++) {
      product *= i;
    }
    return product;
  };

  //string reversal
  const stringReversal = string => {
    let resVar = [];
    let newVar = string.split('');
    for (let i = newVar.length - 1; i > 0; i--) {
      resVar.push(string[i]);
    }
    return resVar.join('');
  };
  const test = [1, 5, 7, 4, 1, 2];
  const returnPositiveInteger = num => {
    if (!Array(num)) {
      return;
    }
    const sortNumber = num.sort((a, b) => a - b);
    LOGGER('sort', sortNumber);
    for (let i = 0; i < sortNumber.length; i++) {
      if (num[i] !== i + 1) {
        return i + 1;
      }
    }
    return num.length + 1;
  };

  return (
    // write a simple Javascript function that given an array of N integers, return the smallest positive integer
    // (greater than 0) that does not occur in A

    // for example,
    // given A= [1,5,7,4,1,2] the function should return 3.
    // Given A = [1,2,3] the function should return 4
    // Given A = [-1, -3] the function should return 1

    // write an efficient algorithm for the following assumptions
    // N is an integer within the range [1..100,000]
    // each element of array A is an integer within the range [-1,000,000..1,000,000]
    <div className="container">
      <Row align="center" justify="center">
        <Col span={8} offset={2}>
          <AppBackHome color="#000" size="small" />
          <Card>
            <h4>Welcome here</h4>
            {factorial(5)}

            <h5>Reversal</h5>
            {stringReversal('Accelation')}

            <h5>Postive</h5>
            {returnPositiveInteger(test)}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default TestScript;
