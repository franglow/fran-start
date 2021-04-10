import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  // fontFamily: "-apple-system, Roboto, sans-serif, serif",
  fontFamily: "'Special Elite', cursive",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

// data
const characters = {
    firstName: 'Fran',
    lastName: 'Cortez',
    linkedIn: '',
    description: ''
  }

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Fran Cortez</title>
      <p style={listItemStyles}>
        {characters.firstName} {characters.lastName}
      </p>
      <p style={paragraphStyles}>
        <code style={codeStyles}>something will show up soon</code>
      </p>
    </main>
  )
}

export default IndexPage
