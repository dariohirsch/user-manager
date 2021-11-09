import "./Button.css"

const Button = ({ children }) => {
	console.log("children", children)
	return <button className="button">{children}</button>
}

export default Button
