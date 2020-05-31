---
templateKey: content-module
heading: A Blog it is..
posttype: jp
subheading: I don't know what I'm doing！
foreground: /assets/foreground.png
background: /assets/background.jpg
contentModule:
  - heading: はじめまして世界！
    content: |-
      今日はいったいなをしてるんだろう



      正しく言えてましたか？



      わかりません。。
    date: 2020-05-16T11:14:17.215Z
    posttype: jp
    publishtype: Publish
  - date: 2020-05-17T04:27:23.822Z
    heading: すみません、お手洗いはどこですか？
    content: |-
      お手洗いはどこにもありません。



      じゃあ、またね
    posttype: jp
    publishtype: Publish
  - date: 2020-05-19T02:51:03.512Z
    heading: 日本語をべんきょうしてる。。
    content: |-
      本当に寒いですね？  

      写真を撮る﻿。  

      る﻿  

      食べる  


      喰べない  

      みる  

      ううううう  

      書かない
    posttype: jp
    publishtype: Publish
  - date: 2020-05-23T03:20:23.138Z
    heading: "'flexible content' はどこですか？？"
    content: |
      する
      しない
      くる
      こない
      来て
      来てください
      新しいmacbookpro2022買おっかな。。？
      でも。。。ほんとに高いです。。
    posttype: jp
    publishtype: Publish
  - date: 2020-05-24T03:46:08.469Z
    heading: お金を貯めなきゃいけない。。！
    content: |-
      今雨降ってるよ

      （**ふってる**）

      (rain**ing)**
    posttype: jp
    publishtype: Publish
  - date: 2020-05-26T04:16:34.302Z
    heading: はこう！
    content: |-
      はこう（self）・はこ(other)　〜to wear (below waist)

      この靴履く。

      （I'll wear these shoes)
    posttype: jp
    publishtype: Publish
  - date: 2020-05-29T10:25:11.698Z
    heading: 明日仕事ありません。。でも。。
    content: |-
      これかわも仕事と日本語の頑張つづけます！

      これかわ　- (from now on(but have always been...))

      仕事と日本語　ー (Work (Web Dev) & Japanese）- しごとと日本語

      頑張り　ー (do my best)　ー　がんばり

      つづけ 　ー (Keep on / keep up)
    posttype: jp
    publishtype: Publish
  - posttype: web
    date: 2020-05-29T11:34:53.186Z
    heading: Use 'vw' to maintain the position of the selected element relative to
      the screen width.
    content: |-
      # Example

      ### Elements:

      .container

      2x columns

      \- Inside columns contain a wrapper (left/right)

      \-- Use margin/padding-left/right: {num}vw;
    publishtype: Publish
  - posttype: web
    date: 2020-05-31T03:52:37.339Z
    heading: Post Type/ Category filtering system.
    content: >
      ** NOTETOSELF&TODO: Add a single post page or else the 'preview post' or
      else this happens..**


      So, I'm surprised that I was able to create a filter system purely on Javascript and some cool ES6 features as I usually use jQuery as it is what I usually use for Wordpress development.

      ___


      What the first version of this post filtering thingy does:


      Firstly, I used NetlifyCMS to do the content management, thats another whole story!


      Now, I created a state using React Js' cool state hook, the data set inside are the following, `windowOn` and `posts`, regarding `posts`, I used the `document.getElementByClassName` to get the repeated posts elements, but firstly since Gatsby/React is fast as fish (JAMstack ftw) the `document.getElementByClassName` should be executed when the DOM is ready, I used another hook that React has created for us called `useEffect`, which is essentially `componentDidMount()` that are used in class based components, what it does is once the the component is mounted on to the DOM, whatever the contents inside the `useEffect`/`componentDidMount()` will be executed. Ultimately, this is like using jQuery's `$(document).on('load',function(){});` or `.ready(function());`. Also, not to forget about the `windowOn`, it will be set to `true` inside the `useEffect()` function.



      Now, I create a new component called 'Filter' and imported it inside the index file, in the return function, I then add

       `{ windowState.windowOn  ? <Filter posttypes={frontmatter.contentModule} postData={windowState.posts}/> : 'loading'}`

      By using the ternary operator, it will input the Filter component to the DOM when `windowState` is true, else it will output `loading`. The data that are passed through are the current posted 'posts' and the available post filters that are being used.


      ***at this point, I've seen become lazy in explaining and simplfied it..***



      Next, Inside the filter component as 4 predefined variables, 2 arrays and 2 unset variables, the `filterArr` array will be populated with the available post types which are "web and jp" the `postArr` will be populated with the number of posts which will be sorted by their selected post type.


      Next in the return function will contain a div that has an `onClick` feature that runs the getFilter function that will pass through the clicked value's `data-type`. Inside the getFilter function it will run a for loop which will loop through all of the posted 'posts' and get their attribute, following that it will remove the `active` class from all of the posts containers and then using a conditional statement we check if the clicked filter matches the posts, if it is true it will add the `active` class to the matching posts.


      FIN.
    publishtype: Draft
---
