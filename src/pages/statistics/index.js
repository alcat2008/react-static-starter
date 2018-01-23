/* eslint-disable */
import React, { Component } from 'react'
import { Chart, Geom, Axis, Tooltip, Coord, Label, Legend, View, Guide, Shape } from 'bizcharts'
import DataSet from '@antv/data-set'
import { Categoties } from '../vote'

import fetch from '../../utils/fetch'
import './statistics.less'

const VOTE_URL_QUERY = '/api/vote/query'

const { DataView } = DataSet

class Statistics extends Component {
  constructor(props) {
    super(props)
    // initial state
    this.state = {
      data: [],
      dv: null,
      dv1: null,
    }
  }

  componentWillMount() {
    fetch(VOTE_URL_QUERY)
      .then(res => {
        const finalData = []
        Object.keys(Categoties).forEach(category => {
          finalData.push(...res[category].map(item => ({
            value: item.count, type: Categoties[category], name: item.label
          })))
        })

        const dv = new DataView();
        dv.source(finalData).transform({
          type: 'percent',
          field: 'value',
          dimension: 'type',
          as: 'percent'
        });
        const dv1 = new DataView();
        dv1.source(finalData).transform({
          type: 'percent',
          field: 'value',
          dimension: 'name',
          as: 'percent'
        });

        this.setState({ data: finalData, dv, dv1 })
      })
  }

  render() {
    const { data, dv, dv1 } = this.state
    if (data.length === 0) return null

    return (
      <div className='statistic_page'>
        <Chart height={window.innerHeight} data={dv} padding={[ 80, 100, 80, 80 ]} forceFit>
          <Coord type='theta' radius={0.5} />
          <Tooltip
            showTitle={false}
            itemTpl='<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
          />
          <Geom
            type="intervalStack"
            position="percent"
            color='type'
            tooltip={['name*percent',(item, percent) => {
              percent = (percent * 100).toFixed(2) + '%';
              return {
                name: item,
                value: percent
              };
            }]}
            style={{lineWidth: 1,stroke: '#fff'}}
            select={false}
          >
            <Label content='type' offset={-10} />
          </Geom>
          <View data={dv1} >
            <Coord type='theta' radius={0.75} innerRadius={0.5 / 0.75}/>
            <Geom
              type="intervalStack"
              position="percent"
              color={['name', [ '#BAE7FF', '#7FC9FE', '#71E3E3', '#ABF5F5', '#8EE0A1', '#BAF5C4' ]]}
              tooltip={['name*percent',(item, percent) => {
                percent = (percent * 100).toFixed(2) + '%';
                return {
                  name: item,
                  value: percent
                };
              }]}
              style={{lineWidth: 1,stroke: '#fff'}}
              select={false}
            >
              <Label content='name'/>
            </Geom>
          </View>
        </Chart>
      </div>
    )
  }
}

export default Statistics
