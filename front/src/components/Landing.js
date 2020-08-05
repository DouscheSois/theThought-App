import React from "react";

const Landing = () => {
  return (
    <section className="landing-page">
      <div className="landing-page-content">
        <h1>Welcome to theThought</h1>
        <h4>An App where you can share your thoughts with the world.</h4>
        <h4>
          You can upvote and downvote, comment on other posts by other users,
          and create a basic profile.
        </h4>
        <div className="landing-page-buttons">
          <button className="landing-page-register-button" type="button">
            Register
          </button>
          <button className="landing-page-login-button" type="button">
            Login
          </button>
        </div>
      </div>
    </section>
  );
};

export default Landing;
