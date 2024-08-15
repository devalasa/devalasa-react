import { useState } from "react";
import BlogList from "./blog-list";
const Home = () => {
  // // let name = "Mario";
  // const [name, setName] = useState("Mario");
  // const handleClick = () => {
  //   setName("Luigi");
  // };
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "Mario", id: 1 },
    { title: "Welcome party", body: "lorem ipsum...", author: "Yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "Mario",
      id: 3,
    },
  ]);
  // const handleClickAgain = (name, e) => {
  //   console.log("hello" + name, e.target);
  // };
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" />
      {/* Filter blogs */}
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "Mario")}
        title="Mario's Blogs!"
      />
      {/* <p>{name}</p>
      <button onClick={handleClick}>Click me</button>
      {/* <button
        onClick={(e) => {
          handleClickAgain("Mario", e);
        }}
      >
        Click me again
      </button> */}
    </div>
  );
};

export default Home;
