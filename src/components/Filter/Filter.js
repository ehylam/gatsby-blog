import React from 'react';
import './Filter.scss';

var filterArr = [];

const Filter = ({posttypes, id}) => {
  for (let i = 0; i < posttypes.length; i++) {
    const type = posttypes[i];
    filterArr.push(type.posttype);
  }

  let uniq = [...new Set(filterArr)];
  console.log(uniq);
  return (
    <section className="filter" >
          <div className="post-list">
      {
        uniq.map((post, index) => (
          <a class="type" key={index} href="#">{post}</a>
        ))
      }
          </div>
    </section>
   );
}

export default Filter;