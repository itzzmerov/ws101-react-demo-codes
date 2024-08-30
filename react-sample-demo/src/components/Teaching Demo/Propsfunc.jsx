function Propsfunc(props) {

    const { name, lastname } = props;

    return (
        <>
            <h1>Name: {name} {lastname}</h1>
            <p>{props.children}</p>
        </>
    )

}

export default Propsfunc;