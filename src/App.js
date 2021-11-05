import { useState } from "react"
import "./App.css"

function App() {
	const [form, setForm] = useState({ name: "" })
	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		})
	}
	return (
		<form>
			<input name="name" placeholder="Nombre" value={form.name} onChange={handleChange}></input>
		</form>
	)
}

export default App
