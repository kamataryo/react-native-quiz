import React from 'react'
import { Button } from 'react-native'

export class Quiz extends React.PureComponent {
  state = {
    questionIndex: -1,
  }

  renderReady = () => {
    return (
      <Button
        onPress={ () =>
          this.setState({ questionIndex: this.state.questionIndex + 1 })
        }
      />
    )
  }

  renderQuestion = () => {}

  /**
   * render
   * @return {ReactElement|null|false} render a React element.
   */
  render() {
    const { questionIndex } = this.state
    const isStarted = questionIndex > -1
    return isStarted ? this.renderQuestion() : this.renderReady()
  }
}
