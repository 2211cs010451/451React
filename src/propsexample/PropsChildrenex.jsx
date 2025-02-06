// SubChildProps.js
import React from 'react';

const SubChildProps = () => {
  return <div>SubChildProps Component</div>;
};

export default SubChildProps;

// PropsChildrenex.js
import React from 'react';

const PropsChildrenex = ({ username, company, children }) => {
  return (
    <div>
      <h2>{username} works at {company}</h2>
      {children}
    </div>
  );
};

export default PropsChildrenex;
