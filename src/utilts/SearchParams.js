const { useSearchParams } = require("next/navigation")

const SearchParams = (param)=>{
    const search = useSearchParams();

    return search.get(param)
}

export default SearchParams;