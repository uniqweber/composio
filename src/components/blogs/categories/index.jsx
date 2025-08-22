import Filter from "./Filter";
import {articles} from "@/constants/blogs";
import CategoryRow from "./CategoryRow";

export default function BlogContainer() {
    return (
        <div className="max-w-screen-2xl mx-auto padding-x font-roobert">
            <Filter />

            <div className="  rounded-lg overflow-hidden">
                <div className="grid grid-cols-12 gap-4  pt-2 pb-2 px-2 border-b border-black/30 text-sm font-light text-black/50 tracking-wide ">
                    <div className="col-span-2">Author</div>
                    <div className="col-span-5">Name</div>
                    <div className="col-span-3 text-right">Tags</div>
                    <div className="col-span-2 text-right">Date</div>
                </div>

                {articles.map((article, index) => (
                    <CategoryRow key={index} article={article} />
                ))}
            </div>

            {/* Load More button */}
            <div className="flex justify-center my-20">
                <button className="border font-roobert-mono uppercase py-2 px-8 border-black/30">LOAD MORE</button>
            </div>
        </div>
    );
}
