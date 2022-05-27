import React, { Component } from 'react'
import { updateExpense } from '../../api/expense'
// import { showExpense, updateExpense } from '../../api/expense'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { withRouter } from 'react-router-dom'

class UpdateExpense extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: '',
      amount: '',
      text: '',
      date: ''
    }
  }

  componentDidMount () {
    // const { match, user, msgAlert } = this.props

    // showExpense(match.params.id, user)
    //   .then((res) => console.log(res.data.expense))
    //   .then((res) =>
    //     this.setState({
    //       title: res.data.expense.title,
    //       amount: res.data.expense.amount,
    //       text: res.data.expense.text,
    //       date: res.data.expense.date
    //     })
    //   )

    //   .then(() => {
    //     msgAlert({
    //       heading: 'Show expense success',
    //       message: 'Woot success',
    //       variant: 'success'
    //     })
    //   })
    //   .catch((error) => {
    //     msgAlert({
    //       heading: 'Show failed',
    //       message: 'Error message: ' + error.message,
    //       variant: 'danger'
    //     })
    //   })
  }

  handleChange = (event) =>
    this.setState({
      [event.target.name]: event.target.value
    })

  handleSubmit = event => {
    event.preventDefault()

    const { user, msgAlert, history, match } = this.props

    updateExpense(this.state, match.params.id, user)
      .then(() => history.push('/expenses/' + match.params.id))
      .then(() => {
        msgAlert({
          heading: 'Updated Expense',
          message: 'woot updated',
          variant: 'success'
        })
      })
      .catch(error => {
        msgAlert({
          heading: 'Update failed',
          message: 'Update error: ' + error.message,
          variant: 'danger'
        })
      })
  }

  render () {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId='title'>
          <Form.Label>Expense Title</Form.Label>
          <Form.Control
            required
            name='title'
            value={this.state.title}
            placeholder='Expense title'
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId='amount'>
          <Form.Label>amount spent: (without the dollar sign)</Form.Label>
          <Form.Control
            required
            name='amount'
            value={this.state.amount}
            placeholder='$000'
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId='text'>
          <Form.Label>Expense text</Form.Label>
          <Form.Control
            required
            name='text'
            value={this.state.text}
            placeholder='Expense text'
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId='date'>
          <Form.Label>Expense date</Form.Label>
          <Form.Control
            required
            name='date'
            value={this.state.date}
            placeholder='Expense date'
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}

export default withRouter(UpdateExpense)
