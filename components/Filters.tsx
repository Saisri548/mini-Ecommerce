interface Props{
    search:string;
    setSearch:(value:string)=>void;
    category:string;
    setCategory:(value:string)=>void;
}
function Filters({search,setSearch,category,setCategory}:Props){
   return(
    <div className="flex gap-4 mb-4">
        <input type="text" 
        value={search} 
        onChange={(e)=>setSearch(e.target.value)}
        placeholder="Search Products.."
         className="border px-2 py-1 rounded"/>
     <select value={category} onChange={(e)=>setCategory(e.target.value)} 
  className="border px-2 py-1 rounded">
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
        </select>    
    </div>
   )

}
export default Filters;