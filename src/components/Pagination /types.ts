export type IActive = {
    isActive: boolean;
}

export type IPaginationProps = {
    offset: number;
    maxCicleButton: number;
    limit:number;
    totalPage:number;
    handlePage:(pageNumber:number)=>void;
}