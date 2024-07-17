import { Button, AnimatedPages } from "../Index";
import WordFadeIn from "../pages/FadeInText";
import { useNavigate } from "react-router-dom";
function LandingPage() {
  const navigate = useNavigate();
  return (
    <AnimatedPages>
      <div className="relative w-full h-screen bg-zinc-800">
        <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[100%] text-[7vw] tracking-tight leading-none font-semibold text-zinc-950 whitespace-nowrap">
          <WordFadeIn text="Sign in to create Docs" />
        </h1>

        <div className="absolute top-1/2 left-1/2 -translate-x-[50%] translate-y-[100%] flex justify-center items-center gap-20 ">
          <Button className="btn" onClick={() => navigate("/login")}>
            Login
          </Button>
          <Button className="btn" onClick={() => navigate("/signup")}>
            Sign Up
          </Button>
        </div>
      </div>
    </AnimatedPages>
  );
}

export default LandingPage;
