import React, { useRef, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { useFile, useBlockstack } from 'react-blockstack';

export default function MainContent() {
  const { userSession } = useBlockstack();
  const [credentials, setCredentials] = useFile('credentials');
  const title = useRef('');
  const address = useRef('');
  const handleClick = () => {
    if ( title.current.value.length && address.current.value.length ) {
      const newCred = { walletName: title.current.value, walletAddress: address.current.value };
      const oldCred = credentials ? JSON.parse(credentials) : [];
      setCredentials(JSON.stringify([ ...oldCred, newCred ]));
    }
  }
  return (
    <>
      <div className="row mt-3">
        <div className="d-flex col-md-12">
          {credentials && JSON.parse(credentials).map( credential => {
            return (
              <Card style={{ width: "17rem" }} className="mr-2" key={credential.walletAddress}>
                <Card.Body>
                  <Card.Title>{credential.walletName}</Card.Title>
                  <Card.Text>{credential.walletAddress}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
      <br />
      <div className="row">
        <form className="col-12">
          <div className="form-group row">
            <label htmlFor="inputName" className="col-sm-2 col-form-label">
              Wallet Name
            </label>
            <div className="col-4">
              <input type="text" ref={title} className="form-control" id="inputName" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputAddress" className="col-sm-2 col-form-label">
              Wallet Address
            </label>
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                ref={address}
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10">
              <button type="button" className="btn btn-primary" onClick={handleClick}>Save</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
