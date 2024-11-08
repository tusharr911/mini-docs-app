import { LoginComponent, AnimatedPages } from "../Index";

function Login() {
  return (
    <AnimatedPages>
      <div className="h-screen flex justify-center items-center bg-[#edf2f7]">
        <LoginComponent />
      </div>
    </AnimatedPages>
  );
}

export default Login;
