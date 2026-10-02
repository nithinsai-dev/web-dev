import { createRootRoute,Outlet,Link} from '@tanstack/react-router'

export const Route=createRootRoute({
    component : () => (
        <div>
            <nav>
                <Link to="/">Home</Link> | <Link to="/tasks">Tasks</Link>
            </nav>
            <hr />
            <Outlet />
        </div>
    )
})