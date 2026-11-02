// NextPage.tsx
import React from 'react';

const NextPage = () => {
  return (
    <div className="container mt-5">
      <div className="alert alert-success" role="alert">
        <h4 className="alert-heading">Welcome to the Next Page!</h4>
        <p>You have successfully navigated to a new view using React Router and Bootstrap.</p>
      </div>
      <a href="/" className="btn btn-secondary">Go Back Home</a>
    </div>
  );
};

export default NextPage;