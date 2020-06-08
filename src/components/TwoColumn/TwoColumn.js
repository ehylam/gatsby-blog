import React from 'react';

import './TwoColumn.scss'

const TwoColumn = (props) => {
  return (
    <div className="two-column">
      <div className="two-column__left">
        {props.left}
      </div>
      <div className="two-column__right">{props.right}</div>
    </div>
   );
}

export default TwoColumn;