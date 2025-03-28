import { useQuery } from "@tanstack/react-query";

export function useManifest(){
    return useQuery({
      queryKey: ['manifest'],
      queryFn: () => {
        return fetch('/manifest.json').then(res => res.json())
      },
    })
}