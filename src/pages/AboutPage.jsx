import { Link, Outlet } from "react-router-dom";


export function AboutPage() {

    return (
        <div>
            <nav>
                <Link to='team'>Team</Link>
                <Link to='location'>Location</Link>
            </nav>
            <Outlet />
        </div>
    )
}
