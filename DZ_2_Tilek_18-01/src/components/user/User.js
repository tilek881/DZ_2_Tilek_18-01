

function User(props) {
    console.log(props)


    return (
        <>
        <p>name: {props.userInfo.name}</p>
        <p>username:{props.userInfo.username} </p>
        <p>age: {props.userInfo.age}</p>

        </>
    );
}

export default User;