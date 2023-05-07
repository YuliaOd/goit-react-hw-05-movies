import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Loader } from "components/Loader/Loader";
import css from "./SharedLayout.module.css";

export const SharedLayout = () => {
    return (
        <div>
            <header className={css.header__nav}>
                <nav>
                    <NavLink to="/" className={({ isActive }) => `${isActive && css.active} ${css.header__navLink}`}> Home </NavLink>
                    <NavLink to="/movies" className={({ isActive }) => `${isActive && css.active} ${css.header__navLink}`}>Movies</NavLink>
                </nav>
            </header>
            <main className={css.container}>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </main>        
        </div>
    )
}