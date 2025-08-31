export default function SearchBar() {
  return (
    <div>
      <input
        className="outline-solid outline-[#d1d1d1] outline-sm outline-1 rounded-sm p-2"
        type="text"
        placeholder="Search recipe"
      />
      <button
        type="search"
        className="px-5 py-2 bg-[#f5602a] rounded-sm text-white ml-4"
      >
        Search
      </button>
    </div>
  );
}
