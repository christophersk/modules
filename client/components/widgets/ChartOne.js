import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data = [

]

const randomNumber = (n) => Math.floor(Math.random() * n)


class ChartOne extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [

      ]
    }
  }

  componentDidMount() {
    axios.get(`https://api.github.com/repos/kyrasolutions/district1_dashboard_ui/commits?access_token=1abd551a54afa9c1ae99e96fc9295cbb61800df6`)
      .then(res => res.data)
      .then(data => console.log('data', data))
      .catch(console.error)

    setInterval(() => this.setState({data: [
      { name: 'foo', uv: randomNumber(10) },
      { name: 'bar', uv: randomNumber(10) },
      { name: 'school', uv: randomNumber(10) },
      { name: 'bus', uv: randomNumber(10) },
    ]}), 2500)
  }

  render() {
    return (
      <div>
        <LineChart width={600} height={400} data={this.state.data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    )
  }
}

const mapState = (state, ownProps) => ({})

const mapDispatch = dispatch => ({})

export default connect(mapState, mapDispatch)(ChartOne);
