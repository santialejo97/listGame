export  interface game{
    gameID: number,
    steamAppID: number,
    cheapest: number,
    cheapestDealID: string,
    external: string,
    internalName: string,
    thumb: string
}

export interface Ofertas {
    storeID: number,
    dealID: string,
    price: number,
    retailPrice: number,
    savings: number
}

export interface Info{
    title: string,
    steamAppID: number,
    thumb: string
}

export interface Precio{
    price: number,
    date: number
}

export interface GameUnico{
    info: Info,
    cheapestPriceEver:Precio,
    deals: Ofertas[]
}