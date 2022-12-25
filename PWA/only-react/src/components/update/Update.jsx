import Warning from "../warning/Warning";
import "./update.css";


export default function Update() {

    return (
        <div className="update">
            <div className="updateWrapper">
                <h3 className="updateTitle">Update Your Account</h3>
                <Warning />
                <button className="delete">Delete Account</button>
                <div className="updateContainer">
                    <form>
                        <div className="formItem">
                            <label>Profile Picture</label>
                            <div className="profilePic">
                                <img
                                    className="avatar"
                                    src="https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                    alt=""
                                />
                                <span className="change">Change</span>
                            </div>
                        </div>
                        <div className="formItem">
                            <label>Username</label>
                            <input
                                className="formInput"
                                type="text"
                            />
                        </div>
                        <div className="formItem">
                            <label>Email</label>
                            <input
                                className="formInput"
                                type="text"
                            />
                        </div>
                        <div className="formItem">
                            <label>Password</label>
                            <input className="formInput" type="password" />
                        </div>
                        <button
                            // disabled={user.pending}
                            className="updateButton"
                            // onClick={handleClick}
                        >
                            Update
                        </button>
                        {/* {user.error && <span className="error">Something went wrong!</span>}
            {user.pending === false && (
              <span className="success">Account has been updated!</span>
            )} */}
                    </form>
                </div>
            </div>
        </div>
    );
}