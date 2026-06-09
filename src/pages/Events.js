import React from 'react';

export default function Events() {
  const shoot = (a) => {
    alert(a);
  };

  return (
    <div className='container-fluid'>
      <div className='mb-2'>Events</div>

      <button onClick={() => shoot("Goal!")}>
        Click Me
      </button>
    </div>
  );
}