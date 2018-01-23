/* eslint-disable */
import React, { Component } from 'react'
import { Chart, Geom, Axis, Tooltip, Coord, Label, Legend, View, Guide, Shape } from 'bizcharts'
import DataSet from '@antv/data-set'
import { Categoties } from '../vote'

import fetch from '../../utils/fetch'
import './statistics.less'

const VOTE_URL_QUERY = '/api/vote/query'

const { DataView } = DataSet

class StatisticsBar extends Component {
  constructor(props) {
    super(props)
    // initial state
    this.state = {
      data: [],
      dv: null,
    }
  }

  componentWillMount() {
    fetch(VOTE_URL_QUERY)
      .then(res => {
        const finalData = []
        const finalFields = []
        Object.keys(Categoties).forEach(category => {
          const finalItem = { category: Categoties[category] }
          res[category].forEach((item, index) => {
            finalItem[item.label] = item.count
            finalFields.push(item.label)
          })

          finalData.push(finalItem)
        })

        const { DataView } = DataSet;
        const dv = new DataView();
        dv.source(finalData)
          .transform({
            type: 'fold',
            fields: finalFields,
            key: '活动类型',
            value: 'count',
            remains: 'category'
          });

        this.setState({ data: finalData, dv })
      })
  }

  render() {
    const { data, dv } = this.state
    if (data.length === 0) return null

    return (
      <div className='statistic_page'>
        <Chart height={window.innerHeight} data={dv} forceFit>
          <Coord type='polar' inner={0.1}/>
          <Axis name='category' />
          <Axis name='count' />
          <Legend name='活动类型' position='bottom' />
          <Tooltip />
          <Geom type='intervalStack' position='category*count' color='活动类型' style={{
            lineWidth: 1,
            stroke: '#fff'
          }}/>
        </Chart>
      </div>
    )
  }
}

export default StatisticsBar
