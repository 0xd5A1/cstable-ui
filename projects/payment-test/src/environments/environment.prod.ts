export const environment = {
	production: true,
	poolId: 'pay',
	paymentTokenSymbol: 'CSPT',
	tokenSymbol: 'CST',
	virtualPriceDiff: 0.006,
	coins: [{ symbol: 'CUSD' }, { symbol: 'USDT' }, { symbol: 'USDC' }],
	rpc: {
		42220: 'https://forno.celo.org'
	},
	chains: {
		42220: {
			enabled: true,
			name: 'Mainnet',
			contracts: {
				proxy: {
					address: '0x11c82560FDe1e42A43c9011c458fe5948B22cdBa'
				},
				payment: {
					address: '0x5565B5642A7dEE655935fFf2EA209079ac7Cc09F'
				}
			}
		},
	},
	subgraphApi: 'https://api.thegraph.com/subgraphs/name/0xa8c81519/my-subgraph'
};
