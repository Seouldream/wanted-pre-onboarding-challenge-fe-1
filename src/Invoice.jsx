/* eslint-disable react/button-has-type */
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getInvoice, deleteInvoice } from '../db/invoicesDb';

export default function Invoice() {
  const navigate = useNavigate();
  const params = useParams();
  //   return <h2>Invoice #???</h2>;
  //   return <h2>Invoice: {params.invoiceId}</h2>;
  const invoice = getInvoice(parseInt(params.invoiceId, 10));
  return (
    <section className="col position-relative m-auto">
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          {invoice.name}
          :
          {' '}
          {invoice.number}
        </div>
        <div className="card-body">
          <h5 className="card-title">
            Total Due:
            {' '}
            {invoice.amount}
          </h5>
          <p className="card-text">
            Due Date:
            {' '}
            {invoice.due}
          </p>
          <button
            className="btn btn-danger"
            onClick={() => {
              deleteInvoice(invoice.number);
              navigate('/tasks');
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </section>
  );
}
