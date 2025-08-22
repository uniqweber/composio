import Categories from "@/components/blogs/categories";
import Featured from "@/components/blogs/featured";
import Search from "@/components/blogs/search";

export default function Blogs() {
    return (
        <>
            <Search />
            <Featured />
            <Categories />
        </>
    );
}
