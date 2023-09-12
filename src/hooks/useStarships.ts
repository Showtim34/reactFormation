import { useQuery } from "@tanstack/react-query";

async function fetchData(q : string) {
    console.log('search', q)
    const result = await fetch(`https://swapi.py4e.com/api/starships/?search=${q}`);
    const json = await result.json();
    return json;

}

export function useStarships(q:string) {
    return useQuery(["starships"], () => fetchData(q));
}