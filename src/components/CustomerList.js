import React, {Component, PropTypes} from 'react';

export default class CustomerList extends Component {
    static propTypes = {
        customers: PropTypes.array
    }

    static defaultProps = {
        customers: []
    }

    render() {
        return (
          <div>
          {
              this.props.customers.map((customer) => {
                  return <div>Customer: {customer.name}</div>;
              })
          }
          </div>
        )
    }
}