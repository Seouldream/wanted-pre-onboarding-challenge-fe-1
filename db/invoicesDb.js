let invoices = [
  {
    name: 'Apple Inc',
    number: 1984,
    amount: '$230,800',
    due: '12/05/1995',
  },
  {
    name: 'Microsoft',
    number: 1980,
    amount: '$158,000',
    due: '10/31/2000',
  },
  {
    name: 'Nvidia',
    number: 2003,
    amount: '$859,500',
    due: '07/22/2003',
  },
  {
    name: 'Menyhart Media',
    number: 1997,
    amount: '$134,220',
    due: '09/01/1997',
  },
  {
    name: 'Tesla',
    number: 1998,
    amount: '$434,600',
    due: '01/27/2998',
  },
];

export function getInvoices() {
  return invoices;
}

export function getInvoice(number) {
  return invoices.find((invoice) => invoice.number === number);
}

// Delete
export function deleteInvoice(number) {
  invoices = invoices.filter((invoice) => invoice.number !== number);
}
