/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { createExpense } from '../../api/expense'

class CreateExpense extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: '',
      amount: '',
      text: '',
      date: ''
    }
  }

  handleChange = (event) =>
    this.setState({
      [event.target.name]: event.target.value
    })

  handleSubmit = (event) => {
    event.preventDefault()

    const { user, msgAlert } = this.props

    createExpense(this.state, user)
      .then(() => {
        msgAlert({
          heading: 'New expense created',
          message: 'New expense created successfully!',
          variant: 'success'
        })
      })
      .catch((error) => {
        msgAlert({
          heading: 'Failed to create new expense',
          message: 'expense error: ' + error.message,
          variant: 'danger'
        })
      })
  }

  render () {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId='title'>
          <Form.Label>Expense:</Form.Label>
          <Form.Control
            required
            name='title'
            value={this.state.title}
            placeholder='Expense Title'
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
          <Form.Label>description</Form.Label>
          <Form.Control
            required
            name='text'
            value={this.state.text}
            placeholder='desciption...'
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId='date'>
          <Form.Label>Date</Form.Label>
          <Form.Control
            required
            name='date'
            value={this.state.date}
            placeholder='yyyy-mm-dd'
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}

export default CreateExpense
