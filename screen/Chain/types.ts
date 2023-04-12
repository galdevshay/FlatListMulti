// Generated by https://quicktype.io

export interface Chain {
    symbol: string;
    priceChange: string;
    priceChangePercent: string;
    weightedAvgPrice: string;
    prevClosePrice: string;
    lastPrice: string;
    lastQty: string;
    bidPrice: string;
    bidQty: string;
    askPrice: string;
    askQty: string;
    openPrice: string;
    highPrice: string;
    lowPrice: string;
    volume: string;
    quoteVolume: string;
    openTime: number;
    closeTime: number;
    firstId: number;
    lastId: number;
    count: number;
}
// Generated by https://quicktype.io

export interface All {
    status: Status;
    data: Datum[];
}

export interface Datum {
    id: number;
    name: string;
    symbol: string;
    slug: string;
    num_market_pairs: number;
    date_added: string;
    tags: string[];
    max_supply: number | null;
    circulating_supply: number;
    total_supply: number;
    infinite_supply: boolean;
    platform: Platform | null;
    cmc_rank: number;
    self_reported_circulating_supply: number | null;
    self_reported_market_cap: number | null;
    tvl_ratio: number | null;
    last_updated: string;
    quote: Quote;
}

export interface Platform {
    id: number;
    name: Name;
    symbol: Symbol;
    slug: Slug;
    token_address: string;
}

export enum Name {
    Aptos = "Aptos",
    Arbitrum = "Arbitrum",
    Bnb = "BNB",
    Ethereum = "Ethereum",
    Optimism = "Optimism",
    TRON = "TRON",
}

export enum Slug {
    Aptos = "aptos",
    Arbitrum = "arbitrum",
    Bnb = "bnb",
    Ethereum = "ethereum",
    OptimismEthereum = "optimism-ethereum",
    TRON = "tron",
}

export enum Symbol {
    Apt = "APT",
    Arb = "ARB",
    Bnb = "BNB",
    Eth = "ETH",
    Op = "OP",
    Trx = "TRX",
}

export interface Quote {
    USD: Usd;
}

export interface Usd {
    price: number;
    volume_24h: number;
    volume_change_24h: number;
    percent_change_1h: number;
    percent_change_24h: number;
    percent_change_7d: number;
    percent_change_30d: number;
    percent_change_60d: number;
    percent_change_90d: number;
    market_cap: number;
    market_cap_dominance: number;
    fully_diluted_market_cap: number;
    tvl: number | null;
    last_updated: string;
}

export interface Status {
    timestamp: string;
    error_code: number;
    error_message: null;
    elapsed: number;
    credit_count: number;
    notice: null;
    total_count: number;
}
