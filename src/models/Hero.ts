export type Hero = {
    id: number;
    name: string;
    thumbnail:{
        path:string;
        extension:string;
    }
    urls:Url[];
}

export type Url ={
    type: string;
    url: string;
}