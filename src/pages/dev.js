import React from "react"


const DevPage = () => {
  let inpt = "";
  const handleChange = (value) => {
    console.log(12121212, value.target.value);
    inpt = value;
  }
  return (
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <input name="inpt" type='text' value={inpt} onChange={handleChange()} />
    </div>
  )
}

export default DevPage
