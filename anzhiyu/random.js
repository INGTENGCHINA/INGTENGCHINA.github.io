var posts=["2024/11/28/hello-world/","2024/11/28/TEST/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };