var posts=["2024/08/03/hello-world/","2024/08/03/现代c-协程第一篇/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };