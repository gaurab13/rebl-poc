import React from 'react';
import { useBlockstack } from 'react-blockstack';

export default function Content ({ person }) {
  const { signOut } = useBlockstack();
  return (
    <main className="container-fluid">
      <div className="row vh-100">
        <div className="col-12 col-md-3 col-xl-2 h-100 border">
          Sidebar
        </div>
        <div className="col-12 col-md-9 col-xl-10 border border-left-0">
          <div className="top-bar d-flex">
            Main Content
          </div>
        </div>
      </div>      
    </main>
  )
}