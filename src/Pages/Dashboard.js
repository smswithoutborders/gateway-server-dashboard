import React, { useState, useEffect } from "react";
import { Box, Card, Grid, Typography } from "@mui/material";
import TheTable from "../Components/Table";

export default function Dashboard() {
	const [totalOperators, setTotalOperators] = useState(0);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"https://660549352ca9478ea17ff019.mockapi.io/gateway/api/table-data"
				);
				const jsonData = await response.json();
				// Calculate the total number of unique operators
				const uniqueOperators = new Set(jsonData.map((item) => item.operator));
				setTotalOperators(uniqueOperators.size);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<Box
			className="bg"
			component="main"
			sx={{
				px: 3
			}}
		>
			<Grid container sx={{ p: 2, display: { md: "flex", xs: "none", sm: "none" } }}>
				<Grid item md={2}></Grid>
				<Grid item md={10}>
					<Grid container columnSpacing={4} sx={{ py: 5 }}>
						<Grid item md={4}>
							<Card className="card" sx={{ p: 3 }}>
								<Typography variant="h6" sx={{ fontWeight: 700, pb: 4 }}>
									👋🏽 Welcome!
								</Typography>
								<Typography variant="boby1">
									Let’s find the most reliable gateway client for you.
								</Typography>
							</Card>
						</Grid>
						<Grid item md={3}>
							<Card className="cards" sx={{ p: 3 }}>
								<Typography variant="h6" sx={{ fontWeight: 500, pb: 4 }}>
									Total Tests
								</Typography>
								<Typography variant="h4" sx={{ fontWeight: 700 }}>
									{totalOperators}
								</Typography>
							</Card>
						</Grid>
					</Grid>

					<Box className="cards">
						<Grid container>
							<Grid item md={12}>
								<TheTable />
							</Grid>
						</Grid>
					</Box>
				</Grid>
			</Grid>
			{/* Mobile View */}
			<Box sx={{ display: { md: "none", xs: "block", sm: "block" } }}>
				<Grid container columnSpacing={4} rowSpacing={4} sx={{ py: 2, mt: 4 }}>
					<Grid item xs={12}>
						<Card className="card" sx={{ p: 3 }}>
							<Typography variant="h6" sx={{ fontWeight: 700, pb: 4 }}>
								👋🏽 Welcome!
							</Typography>
							<Typography variant="boby1" justifyContent="">
								Let’s find the most reliable gateway client for you.
							</Typography>
						</Card>
					</Grid>
					<Grid item xs={6}>
						<Card className="cards" sx={{ p: 3 }}>
							<Typography variant="h6" sx={{ fontWeight: 500, pb: 4 }}>
								Total Tests
							</Typography>
							<Typography variant="h4" sx={{ fontWeight: 700 }}>
								95
							</Typography>
						</Card>
					</Grid>
				</Grid>

				<Box className="cards">
					<Grid container>
						<Grid item xs={12}>
							<TheTable />
						</Grid>
						<Grid
							item
							xs={12}
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center"
							}}
						>
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									height: "100%"
								}}
							>
								<Box
									component="img"
									src="/map.png"
									sx={{
										width: "100%",
										my: "auto",
										display: "block",
										mx: "auto"
									}}
								/>
							</div>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Box>
	);
}
