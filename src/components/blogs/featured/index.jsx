import {featuredArticles} from "@/constants/blogs";
import FeaturedCard from "./FeaturedCard";

export default function Featured() {
    return (
        <div className="padding-x max-w-screen-2xl mx-auto pt-20">
            <h2 className="font-roobert text-xl mb-8 tracking-wide text-black/80">Featured</h2>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                    {featuredArticles.map((article) => (
                        <FeaturedCard key={article.id} article={article} />
                    ))}
                </div>
            </div>
        </div>
    );
}
