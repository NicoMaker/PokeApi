import { useState } from "react"
import { useEffect } from 'react';
import { Card } from './Card';
import { get } from "./request";

export default function PokemonList() {

    const[result,setResult] = useState(undefined);
    const[url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/')

    const request = async () => {
        const body = await get(url);
        console.log(body);
        const newResult = {...body, results: await Promise.all(body.results.map(p => get(p.url)))}
        setResult(newResult);
        
    }

    const next = () => {
        if(result.next){
            const nextUrl = result.next;
            setUrl( nextUrl);
        }
      }
    
      const previous = () => {
        if(result.next){
            const nextUrl = result.previous;
            setUrl(nextUrl);
        }
    }

    useEffect(() => {
        request();
    }, [url]);


   return !!result && (    
   <>
        <button type="button" className="btn btn-primary" onClick={previous} disabled={!result.previous}>Previous</button>
        <button type="button" className="btn btn-primary" onClick={next} disabled={!result.next}>Next</button>
        <div className='card-grid'>
            {result.results.map(p => <Card key={p.name} pokemon={p}></Card>)}
        </div>
    </>)
} 