/* eslint-disable */
import React, { Component } from 'react'
import { Chart, Geom, Axis, Tooltip, Coord, Label, Legend, View, Guide, Shape } from 'bizcharts'
import { Categoties } from '../vote'

import fetch from '../../utils/fetch'
import './statistics.less'

const VOTE_URL_QUERY = '/api/vote/query'

const cols = {
  'count': {
    min: 0
  }
}

class Polar extends Component {
  constructor(props) {
    super(props)
    // initial state
    this.state = {
      data: [],
    }
  }

  componentWillMount() {
    fetch(VOTE_URL_QUERY)
      .then(res => {
        const finalData = []
        Object.keys(Categoties).forEach(category => {
          finalData.push(...res[category].map(item => ({
            name: item.label, count: item.count
          })))
        })

        this.setState({ data: finalData })
      })
  }

  render() {
    const { data, dv, dv1 } = this.state
    if (data.length === 0) return null

    return (
      <div className='statistic_page'>
        <Chart height={window.innerHeight} data={data} scale={cols} padding={[ 40, 40, 130, 40 ]} forceFit>
          <Coord type='polar' />
          <Axis name='count' label={null} tickLine={null} line={{
            stroke: '#E9E9E9',
            lineDash: [ 3, 3 ]
          }} />
          <Axis name='name' grid={{
            align: 'center'
          }} tickLine={null} label={{
            Offset: 10,
            textStyle: {
              textAlign: 'center' // 设置坐标轴 label 的文本对齐方向
            }
          }} />
          <Legend name='name' itemWidth={50} />
          <Tooltip />
          <Geom type='interval' position='name*count' color='name' style={{
            lineWidth: 1,
            stroke: '#fff'
          }}>
            <Label content='count' offset={-15} textStyle={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 11
            }}/>
          </Geom>
        </Chart>
      </div>
    )
  }
}

export default Polar
