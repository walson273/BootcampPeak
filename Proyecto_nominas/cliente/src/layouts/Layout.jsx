import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <main>
        <h1 className="text-3xl font-bold underline">
          Holi
        </h1>
        <Outlet />
      </main>
    <>  
        <main>
            <Outlet/>
        </main>
    </>
  )
}
