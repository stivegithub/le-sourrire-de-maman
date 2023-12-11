import  {useEffect, useState} from "react";

interface size{
    largeur:number,
    hauteur:number
}

const  useDimension=()=>{
    const [size, setSize]= useState<size>({largeur:window.innerWidth, hauteur: window.innerHeight})
    useEffect(()=>{
        let timer:any
        timer= setTimeout(() => {
            setSize({hauteur:window.innerHeight, largeur:window.innerWidth})
            return()=>clearTimeout(timer)
        }, 1);
        return ()=>{
            clearTimeout(timer)
        }
        
    },[])
   
  return size;
}
export default useDimension;

export function useWith():number{
    const size= useDimension()
    return size.largeur;
}