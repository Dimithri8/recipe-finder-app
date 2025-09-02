import { Box } from "@mui/material";

export default function SearchBar({ handleSubmit, handleChange }) {
  return (
    <Box>
      {" "}
      <Box component={"form"} onSubmit={handleSubmit}>
        <input
          className="outline-solid outline-[#d1d1d1] outline-sm outline-1 rounded-sm p-2"
          type="text"
          placeholder="Search recipe"
          name="search"
          onChange={handleChange}
        />

        <button
          type="submit"
          className="px-5 py-2 bg-[#f5602a] rounded-sm text-white ml-4"
        >
          Search
        </button>
      </Box>
    </Box>
  );
}
