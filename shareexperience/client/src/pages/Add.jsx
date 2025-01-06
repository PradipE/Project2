import React from "react";
import { useState } from "react";

import axios from 'axios';
import "react-quill/dist/quill.snow.css";
export function Add() {
  
  const [data, setData] = useState({

  });
    
  const onchange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(data);
  };
  const submitData = async(ev) => {
    ev.preventDefault()


    try{
      const data1 = await axios.post("http://localhost:4001/add",data)
    }catch(err){
      console.log(err.message)
    }
    
  };
  return (
    <div className="flex w-full justify-center items-center pt-40">
      <div className="bg-gray-100 w-[60%] rounded-lg ">
        <h2 className="text-2xl font-bold ml-96 text-gray-800 pt-3">
          POST NEW BLOG
        </h2>
        <form onSubmit={submitData} >
          <div className="flex flex-col p-5 gap-2">
            <lebel
              htmlFor="title"
              className="text-xl font-semibold text-gray-800"
            >
              Title <code className="text-red-700">*</code>
            </lebel>
            <input
              onChange={onchange}
              name="title"
              type="text"
              placeholder="Type Title..."
              required
              className="pl-3 h-10 border rounded-md border-gray-500 text-gray-800"
            />
            <lebel
              htmlFor="descreption"
              className="text-xl font-semibold text-gray-800 pt-5"
            >
              Descreption <code className="text-red-700">*</code>
            </lebel>
            <input
              onChange={onchange}
              name="descreption"
              required
              type="text"
              placeholder="Blog Description..."
              className="pl-3 h-10 border rounded-md border-gray-500 text-gray-800"
            />
            <lebel
              htmlFor="imgurl"
              className="text-xl font-semibold text-gray-800 pt-5"
            >
              Select Image <code className="text-red-700">*</code>
            </lebel>
            <input
              onChange={onchange}
              type="file"
              name="imgurl"
              required
              className="pl-1 h-10  rounded-md  text-gray-800"
            />
            <lebel
              htmlFor="blogcontent"
              className="text-xl font-semibold text-gray-800 pt-5"
            >
              Blog Content <code className="text-red-700">*</code>
            </lebel>
            <textarea
              onChange={onchange}
              theme="snow"
              name="blogcontent"
              required
              placeholder="Type Blog Content..."
              className=" bg-white rounded-lg pl-3 pt-4"
            />
            <hr />
            <button className="text-xl font-bold bg-gray-500 hover:bg-gray-600 text-white h-10 w-32 rounded-md shadow-md mt-4 ml-96">
              Post Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
