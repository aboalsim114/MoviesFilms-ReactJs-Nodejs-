import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Login(props) {
  const [emaillog, setemaillog] = useState('');
  const [passwordlog, setpasswordlog] = useState('');
  const [msg, setmsg] = useState(false);
  const [loading, setloading] = useState(false);
  const ChangeEmailLog = e => {
    setemaillog(e.target.value);
  };

  const history = useHistory();

  const ChangePasswordLog = e => {
    setpasswordlog(e.target.value);
  };

  const Connecter = e => {
    e.preventDefault();
    axios.post('http://localhost:3001/users/Login', { emailLog: emaillog, passwordLog: passwordlog }).then(res => {
      console.log(res);
    });
    setmsg(true);
    setTimeout(() => {
      history.push('/');
    }, 3000);
  };

  return (
    <div className="LoginPage">
      <h2 style={{ textAlign: 'center' }}>Connecter a votre Compte</h2>
      <br />
      <form onSubmit={Connecter} className="MyForm">
        <input type="email" value={emaillog} onChange={ChangeEmailLog} className="form-control" placeholder="votre email" required />
        <input type="password" value={passwordlog} onChange={ChangePasswordLog} className="form-control" placeholder="******" required />
        <input type="submit" className="connecter" value="connexion" />
      </form>
      <br />
      {msg ? <p className="connectedTxt">Vous etes Connecter</p> : null}
    </div>
  );
}
