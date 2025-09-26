import ChildOne from "./child-one/child-login";

export default function LoginPage() {
  const userInfo = {
    firstName: "John",
    lastName: "Doe",
  };
  return (
    <>
      <div>Welcome to Login Page</div>
      <div>
        <form action="" className="form">
          <div className="input">
            <label htmlFor="">First name</label>
            <input type="text" />
          </div>
          <div className="input">
            <label htmlFor="">Last name</label>
            <input type="text" />
          </div>
          <div className="input">
            <label htmlFor="">Email</label>
            <input type="text" />
          </div>
          <div className="input">
            <label htmlFor="">Password</label>
            <input type="text" />
          </div>
          <div></div>
          <button>Submit</button>
        </form>
      </div>

      <ChildOne info={userInfo} age="30" />
    </>
  );
}
