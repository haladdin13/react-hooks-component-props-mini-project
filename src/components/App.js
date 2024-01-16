import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import Logo from "../assets/logo.js";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  const name = blogData.name;
  const image = blogData.image;
  const about = blogData.about;
  const posts = blogData.posts;
  return (
    <div className="App">

      <Header name={name}/>
      <About image={image}
              about={about}/>
      <ArticleList posts={posts}/>

    </div>
  );
}

export default App;
