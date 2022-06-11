import React, { Component } from 'react'
// import { indexOwnedExpenses } from '../../api/expense'
import { deleteExpense, indexOwnedExpenses } from '../../api/expense'
// import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router-dom'
class IndexOwnedExpense extends Component {
  constructor (props) {
    super(props)

    this.state = {
      expenses: null
    }
  }

  componentDidMount () {
    const { user, msgAlert } = this.props

    indexOwnedExpenses(user)
      .then((res) => {
        // console.log('expenses:')
        // console.log(res.data.expenses)
        // console.log('user:')
        // console.log(user._id)
        return res.data.expenses.filter((expense) =>
          expense.owner === user._id
        )
      })
      .then((filteredRes) => this.setState({ expenses: filteredRes }))
      .then(() => {
        msgAlert({
          heading: 'Index My Expenses Success',
          message: 'Expenses successfully shown!',
          variant: 'success'
        })
      })
      .catch((error) => {
        msgAlert({
          heading: 'Indexing My Expenses Failed',
          message: 'Index error: ' + error.message,
          variant: 'danger'
        })
      })
  }

  handleDelete = (id) => {
    // const { match } = this.props
    // console.log('i am deleting for some reason')
    // console.log('props:' + id)
    // console.log(this.props)
    // const { match, user, msgAlert } = this.props
    // const { match, user, msgAlert, history } = this.props
    const { user, msgAlert, history } = this.props
    // console.log(match)
    deleteExpense(id, user)
      // make it reload over here!
      .then(() => history.push('/expenses'))
      .then(() => {
        msgAlert({
          heading: 'Deleted expense successfully',
          message: 'Expense deleted',
          variant: 'success'
        })
      })
      .catch((error) => {
        msgAlert({
          heading: 'Failed to delete expense!',
          message: 'Delete error: ' + error.message,
          variant: 'danger'
        })
      })
  }

  render () {
    const { expenses } = this.state

    if (expenses === null) {
      return 'Loading...'
    }

    let expenseJSX
    if (expenses.length === 0) {
      expenseJSX = 'No expenses, create some'
    } else {
      // console.log('expenses: ' + expenses[0]._id)
      // edit here for showing differently
      const { history } = this.props
      // console.log('match.params.id' + match.params.id)
      expenseJSX = expenses.map((expense) => (
        <li key={expense._id}>
          {/* <Link to={`/expenses/${expense._id}`}>{expense.title}</Link> */}
          <h2>{expense.title}</h2>
          <h6>${expense.amount}</h6>
          <p>{expense.text}</p>
          <Button onClick={() => { this.handleDelete(expense._id) }}>
            Delete
          </Button>
          <Button
            onClick={() => history.push(`/expenses/${expense._id}/edit`)}>
            Update
          </Button>
        </li>
      ))
    }
    let total = 0
    // console.log('length' + expenses.length)
    for (let i = 0; i < expenses.length; i++) {
      // console.log('amount:' + expenses[i].amount)
      total += expenses[i].amount
    }

    return (
      <>
        {/* {console.log(total)} */}
        <h3>My Expenses: ${total}</h3>
        <ul>{expenseJSX}</ul>
      </>
    )
  }
}

export default withRouter(IndexOwnedExpense)
