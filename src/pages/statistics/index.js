/* eslint-disable */
import React, { Component } from 'react'
import { Chart, Geom, Axis, Tooltip, Coord, Label, Legend, View, Guide, Shape } from 'bizcharts';
import fetch from '../../utils/fetch'
import './statistics.less'
const VOTE_URL_QUERY = '/api/vote/query'

const data = [{ country:'中国',cost:96},{country:'德国',cost:121},{country:'美国',cost:100},{country:'日本',cost:111},{country:'韩国',cost:102}];
const cols = {
  'cost': {
    min: 0
  }
}

class Statistics extends Component {
  constructor(props) {
    super(props)
    // initial state
    this.state = {
      data: []
    }
  }

  componentWillMount() {
    fetch(VOTE_URL_QUERY)
      .then(res => {
        const finalData = res
        this.setState({ data: finalData })
      })
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className='statistic_page'>
        <Chart height={window.innerHeight} data={data} scale={cols} padding={[ 40, 40, 130, 40 ]} forceFit>
          <Coord type="polar" />
          <Axis name="cost" label={null} tickLine={null} line={{
            stroke: '#E9E9E9',
            lineDash: [ 3, 3 ]
          }} />
          <Axis name="country" grid={{
            align: 'center'
          }} tickLine={null} label={{
            Offset: 10,
            textStyle: {
              textAlign: 'center' // 设置坐标轴 label 的文本对齐方向
            }
          }} />
          <Legend name="country" itemWidth={30} />
          <Tooltip />
          <Geom type='interval' position='country*cost' color='country' style={{
            lineWidth: 1,
            stroke: '#fff'
          }}>
            <Label content="cost" offset={-15} textStyle={{textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 11
            }}/>
          </Geom>
        </Chart>
      </div>
    )
  }
}

export default Statistics
