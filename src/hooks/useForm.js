import { useState } from "react"

const useForm = (props) => {
	const [form, setForm] = useState(props)
	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		})
	}
	return [form, handleChange]
}

export default useForm
