function Propsfunc(props) {
    console.log(props)
    return (
        <>
            <h1>Name: {props.name} {props.lastname}</h1>
            <p>{props.children}</p>
        </>
    )

}

export default Propsfunc;