import React, { Component } from 'react'
import { Panel } from 'react-bootstrap';


class ProjectItem extends Component {
  render() {
    return (
      <div>
      <Panel>
        <Panel.Heading>{this.props.header}</Panel.Heading>
        <Panel.Body>{this.props.description}</Panel.Body>
      </Panel>
      </div>
    )
  }
}

export default ProjectItem
