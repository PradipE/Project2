import React from "react";
import { NavLink } from "react-router-dom";
function BlogCard(props) {
  let blogdata = props.blogdata;
  return (
    <div className="bg-slate-50 flex flex-col shadow-md overflow-hidden rounded-md w-84 h-72">
      {/* Image Section */}
      <div className="w-full h-1/2">
        <img
          src={blogdata.image}
          alt="Blog"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="w-full h-1/2 p-3">
        <h3 className="text-left text-gray-800 font-serif text-xl">
          {blogdata.title}
        </h3>
        <h4 className="text-left text-gray-800 font-normal font-serif mt-1">
          {blogdata.descreption}
        </h4>
        <p className="text-left opacity-70 font-sans mt-2">
          {blogdata.content}
        </p>
      </div>
      {/*read the whole data*/}
      <div className="bg-gray-500 hover:bg-gray-600 h-8 w-16 ml-32 mb-2 rounded-md ">
        <NavLink to="/blogdetails">
          <h2 className="text-sm font-medium  text-white pl-3">View...</h2>
        </NavLink>
      </div>
    </div>
  );
}

export default BlogCard;
