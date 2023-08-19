export function MenuCategory({ title, children }: MenuCategoryProps) {
    return (
        <div className="text-gray-300 w-full flex flex-col gap-4 mb-4">
            <p className="">
                {title}
            </p>
            {children}
        </div>
    )
}

export interface MenuCategoryProps {
    title: string;
    children: any;
};

export default MenuCategory