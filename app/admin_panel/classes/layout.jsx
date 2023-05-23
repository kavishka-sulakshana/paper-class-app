import ClassSidebar from "@components/sidebars/classSidebar.jsx";

export const metadata = {
    title: "Classes",
    description: "Class section",
}

const Layout = ({ children }) => {
    return (
        <section className="flex w-full">
            <ClassSidebar />
            <div className="flex-1">
                {children}
            </div>
        </section>
    )
}

export default Layout;