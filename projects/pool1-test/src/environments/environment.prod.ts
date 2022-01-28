export const environment = {
    production: true,
    poolId: "p1",
    liquiditySymbol: "CSLP-01",
    tokenSymbol: "CST",
    virtualPriceDiff: 0.006,
    coins: [{ symbol: 'CUSD' }, { symbol: 'USDT' }, { symbol: 'USDC' }],
    rpc: {
        56: "https://bsc-dataseed.binance.org/",
        97: 'https://data-seed-prebsc-1-s1.binance.org:8545/'
    },
    chains: {
        56: {
            enabled: true,
            name: 'Mainnet',
            contracts: {
                proxy: {
                    address: "0x931B226EBb7134a19B970cBF74f18E40a4239178"
                },
                pid: 0,
                coins: [
                    '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
                    '0xe9e7cea3dedca5984780bafc599bd69add087d56',
                    '0x55d398326f99059ff775485246999027b3197955',
                ]
            }
        },
    },
    subgraphApi: "https://api.thegraph.com/subgraphs/name/0xa8c81519/my-subgraph"
};
