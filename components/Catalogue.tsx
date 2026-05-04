import Divider from "@/components/Divider"

interface CatalogueProps {
    title: string,
    children: React.ReactNode,
    styles?: string,
}

const Catalogue = ({
    title,
    children,
    styles = "",
}: CatalogueProps) => (
    <div className={`flex flex-col gap-4 w-full ${styles}`}>
        <Divider titleStyles="btn-text" variant="right" title={title} styles="w-full" />
        <div className="w-full grid grid-cols-1 min-[480px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
            {children}
        </div>
    </div>
)

export default Catalogue