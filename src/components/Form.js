import { useState } from "react";

export default function Form(props) {
  const [formData, setFormData] = useState({
    searchterm: "",
  });

  // Handle input change
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    props.moviesearch(formData.searchterm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchterm"
          onChange={handleChange}
          value={formData.searchterm}
          placeholder="Enter movie title"
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
