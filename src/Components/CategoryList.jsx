
function CategoryList() {

    const lists = ["All" , "Sports", "Gaming" ,"Tv shows" ,"Movies" ,"Cricket" , "Coding" , "DSA" , "Web Development" , "Course" , "News" , "Football","Tv shows" ,"Movies" ,"Cricket" , "Coding" , "DSA" , "Web Development" , "Course" , "News" , "Football"]
  return (
   <>
     <div className="flex items-start px-2 py-2 mb-4 justify-evenly '">
         {lists.map((item,index)=>{
            return <button key={index} className="border border-black px-2 py-1 whitespace-nowrap rounded-md text-sm">{item}</button>
         })}
     </div>
   </>
  )
}

export default CategoryList