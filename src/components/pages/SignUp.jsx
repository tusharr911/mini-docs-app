
import { SignUpComponent, AnimatedPages } from "../Index";
function SignUp() {
  return (
    <AnimatedPages>
      <div className="h-screen flex justify-center items-center bg-[#edf2f7]">
        <SignUpComponent />
      </div>
    </AnimatedPages>
  );
}

export default SignUp;