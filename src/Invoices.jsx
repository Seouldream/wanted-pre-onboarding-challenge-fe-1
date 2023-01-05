import React from 'react';

import {
  Outlet, Link, NavLink, useSearchParams,
} from 'react-router-dom';
import { getInvoices } from '../db/invoicesDb';

export default function Invoices() {
  const invoices = getInvoices();

  //  Search Params
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div
      style={{ maxWidth: '700px' }}
    >
      <h4>Invoices</h4>
      <div>
        <nav>
          <input
            className="rounded-pill w-100 p-2"
            value={searchParams.get('filter') || ''}
            onChange={(event) => {
              const filter = event.target.value;
              filter ? setSearchParams({ filter }) : setSearchParams({});
            }}
            placeholder="Search"
          />
          {invoices
            .filter((invoice) => {
              const filter = searchParams.get('filter');
              if (!filter) return true;
              const name = invoice.name.toLowerCase();
              return name.startsWith(filter.toLowerCase());
            })
            .map((invoice) => (
              <NavLink
                to={`/tasks/${invoice.number}`}
                key={invoice.number}
                className={({ isActive }) => (isActive
                  ? 'd-flex shadow  nav-link btn rounded-pill bg-primary text-light m-2 my-3'
                  : 'd-flex shadow  nav-link btn  rounded-pill bg-white border m-2 my-3')}
              >
                <i className="bi bi-envelope-exclamation-fill   me-2" />
                {invoice.name}
              </NavLink>
            ))}
        </nav>
        <Outlet />
      </div>
    </div>
  );
}
