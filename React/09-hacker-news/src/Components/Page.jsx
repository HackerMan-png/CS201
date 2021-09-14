import React from "react";
import { useStoryContext } from "../util/context";

const Page = () => {
  const { page, setPage, maxPages } = useStoryContext();
  return (
    <div className="pages-wrapper">
      <button
        onClick={() => {
          if (Number(page) - 1 >= 0) {
            setPage(page - 1);
          } else {
            setPage(maxPages - 1);
          }
        }}
      >
        {"<"}
      </button>
      <p>{`${page + 1} of ${maxPages}`}</p>
      <button
        onClick={() => {
          if (page + 1 < maxPages) {
            setPage(page + 1);
          } else {
            setPage(0);
          }
        }}
      >
        {">"}
      </button>
    </div>
  );
};

export default Page;
