import React, { Component } from 'react'

class SectionHeader extends Component {
  render() {
    const { title } = this.props
    return (
      <div className='section_header'> -- {title} -- </div>
    )
  }
}

export default SectionHeader
