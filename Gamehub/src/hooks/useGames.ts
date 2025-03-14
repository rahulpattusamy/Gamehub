import { useState} from "react";
import { useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


export interface Game {
    id: number;
    name: string;
    background_image:string;
  }
  
  interface FetchGameResponse {
    count: number;
    results: Game[];
  }

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
      
      const contoller = new AbortController();  

      apiClient
        .get<FetchGameResponse>("/games", {signal:contoller.signal})
        .then((res) => setGames(res.data.results))
        .catch((err) =>{
            if (err instanceof CanceledError) return;  
            setError(err.message) });

        return() => contoller.abort();
    }, []);
  return{games, error}
}

export default useGames