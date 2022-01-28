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
                    '0x765DE816845861e75A25fCA122bb6898B8B1282a',
                    '0x88eeC49252c8cbc039DCdB394c0c2BA2f1637EA0',
                    '0xef4229c8c3250C675F21BCefa42f58EfbfF6002a',
                ]
            }
        }
    },
};
