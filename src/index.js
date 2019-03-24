import React from 'react';
import ReactDOM from 'react-dom';
import CustomerList from './components/CustomerList';

const customers = [
  {
      id: 1,
      name: 'Nguyễn Văn A'
  },
  {
      id: 2,
      name: 'Nguyễn Văn B'
  }
];

ReactDOM.render(
    <CustomerList customers={customers} />,
    document.getElementById('app')
);