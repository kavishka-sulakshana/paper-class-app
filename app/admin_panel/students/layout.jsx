import StudentSidebar from "@components/sidebars/studentSidebar.jsx";

export const metadata = {
    title: "Classes",
    description: "Class section",
}

const Layout = ({ children }) => {
    return (
        <section className="flex w-full">
            <StudentSidebar />
            <div className="flex-1 overflow-y-scroll" style={{ height: "100vh" }}>
                {children}
            </div>
        </section>
    )
}

export default Layout;