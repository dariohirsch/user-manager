import { useState } from "react"
import "./App.css"
import Button from "./components/Button"
import Card from "./components/Card"
import Container from "./components/Container"
import Input from "./components/Input"
import useForm from "./hooks/useForm"

function App() {
	const [form, handleChange, reset] = useForm({ name: "", lastname: "", email: "" })
	const [users, setUsers] = useState([])

	const handleSubmit = (e) => {
		e.preventDefault()
		setUsers([...users, form])
		reset()
	}

	return (
		<div style={{ marginTop: "5%" }}>
			<Container>
				<Card>
					<div style={{ padding: 20 }}>
						<form onSubmit={handleSubmit}>
							<Input label="Name" name="name" value={form.name} onChange={handleChange} />
							<Input label="LastName" name="lastname" value={form.lastname} onChange={handleChange} />
							<Input label="Email" name="email" value={form.email} onChange={handleChange} />
							<Button> Send </Button>
						</form>
					</div>
				</Card>
				<Card>
					<ul>
						{users.map((user) => (
							<li>{`${user.name} ${user.lastname}: ${user.email} `}</li>
						))}
					</ul>
				</Card>
			</Container>
		</div>
	)
}

export default App
