import "./App.css"
import useForm from "./hooks/useForm"

function App() {
	const [form, handleChange] = useForm({ name: "" })
	return (
		<form>
			<input name="name" placeholder="Nombre" value={form.name} onChange={handleChange}></input>
		</form>
	)
}

export default App
