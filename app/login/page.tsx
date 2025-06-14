import Image from "next/image";


export default function Login() {
  return (
    <>
    <div className="grid items-center justify-items-center min-h-screen">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
<div className="ring">
  <i></i>
  <i></i>
  <i></i>
  <div className="login">
    <h2>Login</h2>
    <div className="inputBx">
    <input
        id="name"
        type="text"
        placeholder="NAME"
      />
    </div>
    <div className="inputBx">
    </div>
    <div className="inputBx">
    </div>
    <div className="links">
      <a href="#">Forget Password</a>
      <a href="#">Signup</a>
    </div>
  </div>
</div>
        </main>
    </div>
    </>
  );
}
