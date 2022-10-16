import { Outlet, Route, Routes } from "react-router-dom"
import { Locations } from "../Locations"

export const ApplicationViews = () => {
	return <>
		return (
		<Routes>
			<Route path="/" element={
				<>
					<h1>Welcome to Kandy Korner</h1>
					<div>Candy just one click away!</div>
					<Outlet />
				//~ ^ Outlet is used in parent route elements to render their child route elements
				</>
			}>

				<Route path="locations" element={<Locations />} />
			</Route>
		</Routes>
		)
	</>
}

