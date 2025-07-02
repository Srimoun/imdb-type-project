import React from 'react'

const Pagination = ({nextPagefn, previouspagefn, pagenumber}) => {
  return (
    <div className = "bg-gray-400 p-4 mt-8 w-full flex items-center justify-center gap-6 text-xl">
    <div className="px-4 cursor-pointer" onClick = {previouspagefn}>
        <i className = "fa-solid fa-arrow-left"></i>
    </div>
    <div>
        {pagenumber}
    </div>
    <div className="px-4 cursor-pointer" onClick = {nextPagefn}> 
        <i className = "fa-solid fa-arrow-right"></i>
    </div>
    </div>
  )
}

export default Pagination