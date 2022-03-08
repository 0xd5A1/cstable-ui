export const environment = {
	production: true,
	poolId: "p1",
	liquiditySymbol: "CSLP-01",
	tokenSymbol: "CST",
	virtualPriceDiff: 0.006,
	coins: [{ symbol: 'CUSD', decimals: 18 }, { symbol: 'USDT', decimals: 6 }, { symbol: 'USDC', decimals: 6 }],
	rpc: {
		42220: 'https://forno.celo.org'
	},
	chains: {
		42220: {
			enabled: true,
			name: 'Mainnet',
			contracts: {
				proxy: {
					address: "0x1417b04E2Ce9cF52ca9e007749e8E2D89209F30b"
				},
				pid: 0,
				coins: [
					'0x765DE816845861e75A25fCA122bb6898B8B1282a',
					'0x88eeC49252c8cbc039DCdB394c0c2BA2f1637EA0',
					'0xef4229c8c3250C675F21BCefa42f58EfbfF6002a',
				]
			}
		},
	},
	subgraphApi: "https://api.thegraph.com/subgraphs/name/0xa8c81519/my-subgraph"
};
