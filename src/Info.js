import React from 'react';

//creating a functional component called Info
const Info = () => {
  //variable named title
  const title = 'This is my title';
  const showTitle = false;

  // if statement example
  // if (showTitle) {
  //   return (
  //     <div>
  //       <h1>{title}</h1>
  //       <p>Manage your stuff</p>
  //     </div>
  //   );
  // } else {
  //   return <p>empty</p>;
  // }
  return (
    //make sure to return one parent component e.g. div
    <div>
      {/* surrounded in curly braces to pass in value */}
      {/* showTitle ternerary expression */}
      <h1>{showTitle ? title : ''}</h1>
      <p>Manage your stuff</p>
    </div>
  );
};

export default Info;
