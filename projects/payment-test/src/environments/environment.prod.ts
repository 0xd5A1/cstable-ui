export const environment = {
	production: true,
	poolId: 'pay',
	paymentTokenSymbol: 'CSPT',
	tokenSymbol: 'CST',
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
					address: '0x1417b04E2Ce9cF52ca9e007749e8E2D89209F30b'
				},
				payment: {
					address: '0x1650d61B57943f0af725cB8275c0D9147366CB27'
				}
			}
		},
	},
	subgraphApi: 'https://api.thegraph.com/subgraphs/name/0xa8c81519/my-subgraph'
};
