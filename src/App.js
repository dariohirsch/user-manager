import "./App.css"
import Button from "./components/Button"
import Card from "./components/Card"
import Container from "./components/Container"
import Input from "./components/Input"
import useForm from "./hooks/useForm"

function App() {
	const [form, handleChange] = useForm({ name: "", lastname: "", email: "" })
	return (
		<Container>
			<Card>
				<div style={{ padding: 20 }}>
					<form>
						<Input label="Name" name="name" value={form.name} onChange={handleChange} />
						<Input label="LastName" name="lastname" value={form.lastname} onChange={handleChange} />
						<Input label="Email" name="email" value={form.email} onChange={handleChange} />
						<Button> Send </Button>
					</form>
				</div>
			</Card>
		</Container>
	)
}

export default App
