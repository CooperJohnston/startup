                          import React from 'react';

const Login = () => {
  const loginUser = async () => {
    const userName = document.querySelector('#User').value;
    const password = document.querySelector('#psw').value;
    const response = await fetch(`/api/auth/login`, {
      method: 'post',
      body: JSON.stringify({ email: userName, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    if (response.ok) {
      localStorage.setItem('userName', userName);
      // Redirect to library page or handle success in React way
    } else {
      const body = await response.json();
      const modalEl = document.querySelector('#msgModal');
      modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
      const msgModal = new bootstrap.Modal(modalEl, {});
      msgModal.show();
    }
  };

  const createUser = async () => {
    const userName = document.querySelector('#User').value;
    const password = document.querySelector('#psw').value;
    const response = await fetch(`/api/auth/create`, {
      method: 'post',
      body: JSON.stringify({ email: userName, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    if (response.ok) {
      localStorage.setItem('userName', userName);
      // Redirect to library page or handle success in React way
    } else {
      const body = await response.json();
      const modalEl = document.querySelector('#msgModal');
      modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
      const msgModal = new bootstrap.Modal(modalEl, {});
      msgModal.show();
    }
  };

  return (
    <div className="container-fluid bg-secondary text-center">
      <h1>CS260 Startup: ONLINE COMIC BOOK REVIEW LIBRARY</h1>
      <div>
        <input type="form-control" id="User" placeholder="Enter Username" />
        <input type="password" placeholder="Enter Password" id="psw" />
        <button type="button" className="btn btn-primary" onClick={loginUser}>Login</button>
        <button type="button" className="btn btn-primary" onClick={createUser}>Create</button>
      </div>
      <div className="modal fade" id="msgModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content text-dark">
            <div className="modal-body">error message here</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
