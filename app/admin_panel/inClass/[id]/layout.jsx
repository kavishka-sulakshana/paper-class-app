import InClassSidebar from "@components/sidebars/InClassSidebar.jsx";

export const metadata = {
    title: "Classes",
    description: "Class section",
}

const Layout = ({ children, params }) => {
    return (
        <section className="flex w-full">
            <InClassSidebar params={params} />
            <div className="flex-1">
                {children}
            </div>
        </section>
    )
}

export default Layout;