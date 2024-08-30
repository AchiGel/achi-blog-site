import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Context } from "../main";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { ImBlog } from "react-icons/im";

const HeaderLayout = styled.header`
  display: flex;
  justify-content: space-between;
  height: 5rem;
  align-items: center;
  padding: 2rem;
  background-color: lightgray;
  margin-bottom: 2rem;
`;

const RegButton = styled.button`
  border: none;
  outline: none;
  background-color: blue;
  padding: 1rem;
  border-radius: 10%;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 2rem;
`;

export const NavItems = styled.li`
  font-size: 18px;
  list-style: none;
`;

export default function Header() {
  const { auth } = useContext(Context)!;

  const login = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user.photoURL);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const [user] = useAuthState(auth);
  return (
    <div>
      <HeaderLayout>
        <Link to="/">
          <ImBlog style={{ fontSize: "25px", color: "black" }} />
        </Link>
        <Navigation>
          <NavList>
            <NavItems>
              <Link to="/">Blog</Link>
            </NavItems>
            <NavItems>
              <Link to="/projects">Projects</Link>
            </NavItems>
            <NavItems>
              <Link to="/about">About</Link>
            </NavItems>
            <NavItems>
              <Link to="/newsletter">Newsletter</Link>
            </NavItems>
          </NavList>
          {user ? (
            <RegButton onClick={() => auth.signOut()}>
              <img
                style={{ height: "24px", width: "24px" }}
                src={user.photoURL as string}
              />
              LogOut
            </RegButton>
          ) : (
            <RegButton onClick={login}>LogIn</RegButton>
          )}
        </Navigation>
      </HeaderLayout>
    </div>
  );
}
