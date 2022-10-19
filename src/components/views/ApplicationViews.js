import { Outlet, Route, Routes } from "react-router-dom"
import { CreateProductForm } from "../forms/CreateProductForm"
import { Locations } from "../Locations"
import { ProductList } from "../products/Products"

export const ApplicationViews = () => {
	
return <>
		<Routes>
			<Route path="/" element={
				<>
					<h1>Welcome to Kandy Korner</h1>
					<div>Candy just one click away!</div>
					<Outlet />
				</>
			}>

				<Route path="locations" element={<Locations />} />
				<Route path="products" element={<ProductList />} />
				<Route path="create-form" element={<CreateProductForm />} />
			</Route>
		</Routes>
	</>
}

//~ ^  OUTLET is used in parent route elements to render their child route elements