import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

export default class StepProgressBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      percent:0
    }    
  }
  componentDidMount()
  {
    if(this.props.status==='Order Placed')
    this.setState({percent:20})
    else if(this.props.status==='In Process')
    this.setState({percent:50})
    else if(this.props.status==='Delivered')
    this.setState({percent:100})
    else
    this.setState({percent:0})
  }
  render() {
    return (
      <ProgressBar percent={this.state.percent}>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
              {index + 1}
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
              {index + 1}

            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
              {index + 1}
            </div>
          )}
        </Step>
      </ProgressBar>
    );
  }
}