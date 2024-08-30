function Handlingfunc() {
    // function handleclick() {
    //     console.log("Button is clicked!")
    // }
    const handleclick = () => { console.log("Hello there!") }
    return (
        <>
            <h1>Handling Functional Components</h1>
            <button onClick={handleclick}>Click Here</button>
        </>
    )
}

export default Handlingfunc;