import React from 'react';

function CurrentYear() {
  const year = new Date().getFullYear(); // Get the current year

  return (
    <div>
      <p>© {year} Copyrights by Academic Bridge All Rights Reserved.</p>
    </div>
  );
}

export default CurrentYear;
