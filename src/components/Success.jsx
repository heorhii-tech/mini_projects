import React from 'react';

export const Success = ({ invites }) => {
  { console.log(invites) }
  return (
    <div class="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Success!</h3>
      <p>An invitation has been sent to all {invites.length} users.</p>
      <button onClick={() => window.location.reload()} className="send-invite-btn">Back</button>
    </div>
  );
};
