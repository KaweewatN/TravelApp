import React from "react"
import "./TouristSpots.css"
import { useState, useEffect } from "react";
import axios from "axios"
import {FaSearch} from "react-icons/fa"
import {TiArrowBack} from "react-icons/ti";
import { Link } from "react-router-dom";
import Content from "./content"


export default function TouristSpots() {

    const [data, setData] = useState([]);
	// const [loading, setLoading] = useState(false);
	const [page, setPage] = useState(1)
	const [totalRows, setTotalRows] = useState(0);
	const [perPage, setPerPage] = useState(10);
	const [SortColumn, setSortColumn] = useState('')
	const [SortColumnDir, setSortColumnDir] = useState('');
	const [search, setSearch] = useState(" ");

	const contents = data.map(item => {
		return (
			<Content
			id = {item.id}
			image = {item.imageURL}
			name = {item.name}
			province = {item.province}
			star = {item.star}
			/>
		)
	})

	const fetchData = async () => {
		// setLoading(true);

		var url = `http://192.168.0.103:5000/api/attractions?page=${page}&per_page=${perPage}`

		if (search) {
			url += `&search=${search}`
		}

		const response = await axios.get(url);

		setData(response.data.data);
		setTotalRows(response.data.total);
		// setLoading(false);
	};

	const handlePageChange = page => {
		setPage(page);
	};

	const handlePerRowsChange = async (newPerPage, page) => {
		setPerPage(newPerPage);
	};

	const handleSearchChange = (event) => {
		setSearch(event.target.value);
	}

	const handleSearchSubmit = (event) => {
		event.preventDefault();
		fetchData();
	}

	useEffect(() => {
		fetchData(); // fetch page
	}, [page, perPage, SortColumn, SortColumnDir]);


	return (
		<div>	
			<form onSubmit = {handleSearchSubmit} className="search-summit">

				<Link to= '/' className="back-button-link">
					<button className="search-back-button">
						<p> <TiArrowBack></TiArrowBack> </p>
					</button>
				</Link>

				<label>
					<input type="text" name="Search" 
					className="search-input" onChange={handleSearchChange}
					placeholder="Search you interest"/>
				</label>

				<button type="submit" className="search-button" > 
					<p><FaSearch/></p>
				</button>

			</form>

			{contents}

			<div className="blank-container"></div>

        </div>
	);
}