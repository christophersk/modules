import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { BarChart, Legend, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data = [

]

const styles = {
  container: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    },
}

class BarOne extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [

      ]
    }
  }

  render() {
    const { data, index, level } = this.props;
    console.log('data is', data);

    const dataArray = [];

    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        dataArray.push({ key, value: data[key] })
      }
    }

    console.log('dataArray', dataArray);

    let display;
    if (index === level) {
      display = 'block'
    } else {
      display = 'none'
    }

    return (
      <div style={{ ...styles.container, display }}>
        <BarChart width={730} height={250} data={dataArray}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="key" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </div>
    )
  }
}

const mapState = (state, ownProps) => ({})

const mapDispatch = dispatch => ({})

export default connect(mapState, mapDispatch)(BarOne);
