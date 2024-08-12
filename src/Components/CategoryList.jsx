function CategoryList({ videoCategory }) {
  return (
    <>
      <div className="flex items-start px-2 py-2 mb-4 justify-center gap-4 ">
        {videoCategory?.slice(0,14)?.map((item, index) => {
          return (
            <button
              key={index}
              className="border border-black px-2 py-1 whitespace-nowrap rounded-md text-sm"
            >
              {item?.snippet?.title}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default CategoryList;
