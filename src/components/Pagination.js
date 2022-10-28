import React from 'react'

export const Pagination = ({totalPosts, postsPerPage, setCurrentPage}) => {
    let pages = [];
    let i = 1;

    for( i ; i<= Math.ceil(totalPosts/postsPerPage); i++) {
        pages.push(i);
    }

  return (
    <div>
        {
            pages.map((page, index) => {
                return <button key={index} onClick={()=> setCurrentPage(page)} className="h-10 px-5 text-cyan-500 bg-white border border-cyan-500 hover:bg-gray-100" >
                    {page}
                </button>
            })
            
        }
    </div>
  )
}
export default Pagination