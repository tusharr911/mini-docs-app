import { Logo, LogoutBtn, Container } from "../Index";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AuthSliceSelector } from "../../../Store/authSlice";
function Header() {
  const navigate = useNavigate();
  const { status: authStatus } = useSelector(AuthSliceSelector);
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Sign Up",
      slug: "/sign-up",
      active: !authStatus,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    { name: "All posts", slug: "/all-posts", active: authStatus },
    { name: "Add post", slug: "/add-post", active: authStatus },
    {
      name: "About",
      slug: "/about",
      active: true,
    },
  ];
  return (
    <header>
      <Container>
        <nav className="flex">
          <div>
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <button onClick={() => navigate(item.slug)}>
                      {item.name}
                    </button>
                  </li>
                )
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
