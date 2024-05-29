import React from "react";

function PaginationNum({
  totalProducts,
  perPage,
  currentPage,
  setCurrentPage,
  cateProducts
}) {
  // for dynamic navigation number
  let pageNumber = [];

  for (let i = 1; i <= Math.ceil(cateProducts.length > 0 ? cateProducts.length/ perPage : totalProducts / perPage); i++) {
    pageNumber.push(i);
  }
  //   for pagination by click
  let Paginate = (Number) => {
    setCurrentPage(Number);
  };
  // for next & prev buttons
  let Next = () => {
    if (currentPage < pageNumber.length) {
      setCurrentPage((page) => page + 1);
    }
  };
  let Prev = () => {
    if (currentPage > 1) {
      setCurrentPage((page) => page - 1);
    }
  };

  return (
    <>
      <nav aria-label="Page navigation example">
        <ul class="flex items-center -space-x-px h-8 text-sm my-10">
          {pageNumber.length > 0 &&
          (<li onClick={Prev}>
            <a class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer">
              <span class="sr-only">Previous</span>
              <svg
                class="w-2.5 h-2.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </a>
          </li>)
          }
          {pageNumber.map((item, i) => (
            <li key={item} onClick={() => Paginate(item)}>
              <a
                class={`flex items-center justify-center px-3 h-8 leading-tight  border border-gray-300 hover:bg-black font-dmsans text-sm hover:text-white cursor-pointer ${
                  currentPage == i + 1
                    ? "bg-black text-white"
                    : "text-secondary bg-white"
                }`}
              >
                {item}
              </a>
            </li>
          ))}
          {pageNumber.length > 0 &&(
          <li onClick={Next}>
            <a class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer">
              <span class="sr-only">Next</span>
              <svg
                class="w-2.5 h-2.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </a>
          </li>
          )}
        </ul>
      </nav>
    </>
  );
}

export default PaginationNum;
