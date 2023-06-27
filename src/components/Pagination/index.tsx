const Pagination = () => {
  return (
    <div className="w-auto h-auto mx-6 border-t-2">
      <div className="flex justify-between items-center py-7">
        <span className="text-sm font-medium cursor-pointer">
          &larr; Previous
        </span>
        <div className="space-x-3 flex items-center justify-center">
          <button className="pagination-btn__active">1</button>
          <button className="pagination-btn">2</button>
          <button className="pagination-btn">3</button>
          <span className="p-3 w-10">...</span>
          <button className="pagination-btn">8</button>
          <button className="pagination-btn">9</button>
          <button className="pagination-btn">10</button>
        </div>
        <span className="text-sm font-medium cursor-pointer">Next &rarr;</span>
      </div>
    </div>
  );
};

export default Pagination;
