import { useState } from "react";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const breeds = [];

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            id="location"
            placeholder="Location"
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="animal">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
          >
            <option />
            {breeds.map((breed) => {
              <option key={breed}>{breed}</option>;
            })}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
