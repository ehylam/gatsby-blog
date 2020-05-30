import React from 'react';
import './Filter.scss';

var filterArr = [];
var postArr = [];
var posts = document.getElementsByClassName('content--wrapper');
const Filter = ({posttypes, id}) => {
  for (let i = 0; i < posttypes.length; i++) {
    const type = posttypes[i];
    filterArr.push(type.posttype);
  }

  for (let y = 0; y < posts.length; y++) {
    const post = posts[y];
    postArr.push(post);
  }
  let uniq = [...new Set(filterArr)];
  let postId = [...new Set(postArr)];
  var getFilter = (e) => {
    var filter = e.target.dataset.type;
    for (let i = 0; i < postId.length; i++) {
      const element = postId[i];
      var post = element.getAttribute('data-type');
      element.classList.remove('active');
      if(post === filter) {
        // console.log(this)
        element.classList.add('active');
      }
    }


  }

  return (
    <section className="filter" >
          <div className="post-list">
      {
        uniq.map((post, index) => (
          <a className="type" data-type={post} key={index} href="#" onClick={(e) => { getFilter(e)}}>{post}</a>
        ))
      }
          </div>
    </section>
   );
}

export default Filter;