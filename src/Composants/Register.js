import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Register() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [showok, setshowok] = useState(false);

  const ChangeEmail = e => {
    setemail(e.target.value);
  };

  const ChangePassword = e => {
    setpassword(e.target.value);
  };

  const Inscription = e => {
    e.preventDefault();
    console.log('connected');
    setshowok(true);
    axios.post('http://localhost:3001/users/register', { email: email, password: password }).then(res => {
      console.log(res);
    });

    Swal.fire('Tres Bien ', 'Vous etes bien Inscrit ', 'success');
  };

  return (
    <div className="RegisterPage">
      {showok ? <p className="connectedTxt">Vous etes inscrit avec le email : {email}</p> : null}
      <form onSubmit={Inscription} className="MyForm">
        <input className="form-control" value={email} onChange={ChangeEmail} type="email" placeholder="votre email" required />
        <input className="form-control" value={password} onChange={ChangePassword} type="password" placeholder="*****" required />
        <input type="submit" value="Cree Mon Compte" className="connecter" />
      </form>
    </div>
  );
}
