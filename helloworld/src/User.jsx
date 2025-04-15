const User=()=>{
    const isLoggedin=true
    return(
        <>
        <h1>User Profile</h1>
        {/* {isLoggedin ? (<button>Logout</button>):(<button>LogIN</button>)} */}
       {/* // true &&"hello"=hello
       false &&"hello"=hello */}
       {isLoggedin && <button>Logout</button>}
       {!isLoggedin&&<button>Login</button>}
       {isLoggedin && <p>Welcomeback</p>}
        </>
    )

}

export default User