import React from "react";
import BlogCard from "../component/BlogCard";
export function Read() {
  const data = [
    {
      title: "blog title",
      image: "https://picsum.photos/200/300",
      descreption: "blog desc",
      content:
        "bjhbjhsdbmdbsjdbcmvbjhvbsdmnvbsmndsvjjsdbvmfbvmvbmcvbfjvbfjdvbfjvbfhvj",
    },
    {
      image: "https://picsum.photos/200/300",
      title: "blog title",
      descreption: "blog desc",
      content:
        "bjhbjhsdbmdbsjdbcmvbjhvbsdmnvbsmndsvjjsdbvmfbvmvbmcvbfjvbfjdvbfjvbfhvj",
    },
    {
      image: "https://picsum.photos/200/300",
      title: "blog title",
      descreption: "blog desc",
      content:
        "bjhbjhsdbmdbsjdbcmvbjhvbsdmnvbsmndsvjjsdbvmfbvmvbmcvbfjvbfjdvbfjvbfhvj",
    },
    {
      image: "https://picsum.photos/200/300",
      title: "blog title",
      descreption: "blog desc",
      content:
        "bjhbjhsdbmdbsjdbcmvbjhvbsdmnvbsmndsvjjsdbvmfbvmvbmcvbfjvbfjdvbfjvbfhvj",
    },
    {
      image: "https://picsum.photos/200/300",
      title: "blog title",
      descreption: "blog desc",
      content:
        "bjhbjhsdbmdbsjdbcmvbjhvbsdmnvbsmndsvjjsdbvmfbvmvbmcvbfjvbfjdvbfjvbfhvj",
    },
    {
      image: "https://picsum.photos/200/300",
      title: "blog title",
      descreption: "blog desc",
      content:
        "bjhbjhsdbmdbsjdbcmvbjhvbsdmnvbsmndsvjjsdbvmfbvmvbmcvbfjvbfjdvbfjvbfhvj",
    },
    {
      image: "https://picsum.photos/200/300",
      title: "blog title",
      descreption: "blog desc",
      content:
        "bjhbjhsdbmdbsjdbcmvbjhvbsdmnvbsmndsvjjsdbvmfbvmvbmcvbfjvbfjdvbfjvbfhvj",
    },
    {
      image: "https://picsum.photos/200/300",
      title: "blog title",
      descreption: "blog desc",
      content:
        "bjhbjhsdbmdbsjdbcmvbjhvbsdmnvbsmndsvjjsdbvmfbvmvbmcvbfjvbfjdvbfjvbfhvj",
    },
    {
      image: "https://picsum.photos/200/300",
      title: "blog title",
      descreption: "blog desc",
      content:
        "bjhbjhsdbmdbsjdbcmvbjhvbsdmnvbsmndsvjjsdbvmfbvmvbmcvbfjvbfjdvbfjvbfhvj",
    },
    {
      image: "https://picsum.photos/200/300",
      title: "blog title",
      descreption: "blog desc",
      content:
        "bjhbjhsdbmdbsjdbcmvbjhvbsdmnvbsmndsvjjsdbvmfbvmvbmcvbfjvbfjdvbfjvbfhvj",
    },
    {
      image: "https://picsum.photos/200/300",
      title: "blog title",
      descreption: "blog desc",
      content:
        "bjhbjhsdbmdbsjdbcmvbjhvbsdmnvbsmndsvjjsdbvmfbvmvbmcvbfjvbfjdvbfjvbfhvj",
    },
    {
      image: "https://picsum.photos/200/300",
      title: "blog title",
      descreption: "blog desc",
      content:
        "bjhbjhsdbmdbsjdbcmvbjhvbsdmnvbsmndsvjjsdbvmfbvmvbmcvbfjvbfjdvbfjvbfhvj",
    },
  ];
  return (
    <div>
      <div className="pt-32 h-48 w-full pb-5 items-center justify-center flex gap-3">
        <input
          type="text"
          placeholder="Search..."
          className=" h-9 w-1/4 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
        />
        <button className=" bg-gray-500 hover:bg-gray-600 h-8 w-20 text-white font-medium text-lg rounded-md">
          search
        </button>
      </div>
      <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-5 ">
        {data.map((x) => {
          return <BlogCard blogdata={x} />;
        })}
      </div>
    </div>
  );
}
