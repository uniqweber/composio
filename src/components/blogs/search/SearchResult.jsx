export default function SearchResult({title, slug, onClick}) {
    return (
        <li onClick={onClick} className="p-3 rounded-lg hover:bg-gray-100 transition cursor-pointer">
            <p className="text-xl line-clamp-1 text-black">{title}</p>
            <p className="text-sm text-black/40">blogs/{slug}</p>
        </li>
    );
}
