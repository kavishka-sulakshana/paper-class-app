import PaperSidebar from "@components/sidebars/PaperSidebar.jsx";

export const metadata = {
    title: "Classes",
    description: "Class section",
}

const Layout = ({ children, params }) => {
    return (
        <section className="flex w-full">
            <PaperSidebar params={params} />
            <div className="flex-1">
                {children}
            </div>
        </section>
    )
}

export default Layout;