import React, {useEffect} from 'react';
import './Filter.scss';

var filterArr = [];
var postArr = [];
var posts, uniq, postId;
// posts = document.getElementsByClassName('content--wrapper');
const Filter = ({posttypes, id, postData}) => {
    console.log(postData + " from state");
    // console.log(posts + " from document");

    for (let i = 0; i < posttypes.length; i++) {
      const type = posttypes[i];
      filterArr.push(type.posttype);
    }

    // for (let y = 0; y < posts.length; y++) {
    //   const post = posts[y];
    //   postArr.push(post);
    // }
    for (let y = 0; y < postData.length; y++) {
      const post = postData[y];
      postArr.push(post);

    }
    uniq = [...new Set(filterArr)];
    postId = [...new Set(postArr)];


  var  getFilter = (e) => {
    var filter = e.target.dataset.type;
    for (let i = 0; i < postId.length; i++) {
      const element = postId[i];
      var post = element.getAttribute('data-type');
      console.log(post);
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
          <div className="type" data-type={post} key={index} onClick={(e) => { getFilter(e)}}>
            <div data-type={post}>{post}</div>
            <div data-type={post}>{post}</div>
          </div>
        ))
      }
          </div>
    </section>
   );
}

export default Filter;