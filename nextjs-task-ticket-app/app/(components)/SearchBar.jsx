import React from "react";

const SearchBar = () => {
  const [status, setStatus] = useState([]);

  const handleChange = (e) => {
    const { checked, value } = e.target;
    setStatus((prev) => {
      if (checked) {
        return [...prev, value];
      } else {
        return prev.filter((item) => item !== value);
      }
    });
  };
  return (
    <div>
      {["not started", "working on", "done"].map((s, si) => (
        <div key={si}>
          <input
            type="checkbox"
            name={s}
            checked={status.includes(s)}
            value={s}
            onChange={handleChange}
          />
          <label htmlFor={s}>{s}</label>
        </div>
      ))}
    </div>
  );
};

export default SearchBar;
