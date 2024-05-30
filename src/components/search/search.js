import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_url, geoApiOptions } from "../../api";

const Search = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null);

    const loadOptions = (inputValue) => {
        return fetch(`${GEO_API_url}/cities?namePrefix=${inputValue}`, geoApiOptions)
            .then((response) => response.json())
            .then((response) => {
                return {
                    options: response.data.map((cities) => {
                        return {
                            value: `${cities.latitude} ${cities.longitude}`,
                            label: `${cities.name} , ${cities.countryCode}`,
                        };
                    }),
                };
            })
            .catch(err => console.log(err));
    };

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    };

    return (
        <AsyncPaginate
            placeholder="Search for cities"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    );
};

export default Search;