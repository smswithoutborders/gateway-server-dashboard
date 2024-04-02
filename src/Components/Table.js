import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import { Grid } from "@mui/material";

const columns = [
	"id",
	"msisdn",
	"country",
	"operator",
	"regdate",
	"routed",
	"success",
	"failure",
	"error"
];

const options = {
	filterType: "checkbox"
};

function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"https://660549352ca9478ea17ff019.mockapi.io/gateway/api/table-data"
				);
				const jsonData = await response.json();
				// Mapping the fetched data
				const mappedData = jsonData.map((item) => ({
					id: item.id,
					msisdn: item.msisdn,
					country: item.country,
					operator: item.operator,
					regdate: new Date(item.regdate).toLocaleDateString(),
					routed: item.routed,
					success: item.success,
					failure: item.failure,
					error: item.error
				}));

				setData(mappedData);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<div className="App bg-slate-700 py-10 min-h-screen grid place-items-center">
			<div className="w-10/12 max-w-4xl">
				<Grid container spacing={3}>
					<Grid item md={12}>
						<MUIDataTable title={"Employee List"} data={data} columns={columns} options={options} />
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default App;
