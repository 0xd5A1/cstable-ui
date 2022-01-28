export const environment = {
	production: true,
	mainnet: {
		networkId: 56,
		rpc: {
			url: "https://bsc-dataseed.binance.org/",
		},
		payment: {
			address: '0x830a40032FEA261E57736fce9bB6Cc04124a8459',
		},
		pool: {
			address: '0x81b6711677783e38A575ff1CCeFDcc6F86617006',
		},
		busd: {
			address: '0xe9e7cea3dedca5984780bafc599bd69add087d56'
		},
		usdt: {
			address: '0x55d398326f99059ff775485246999027b3197955'
		},
		usdc: {
			address: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d'
		}
	},
	deployer: {
		address: '0xb0cef4066a297656ffe722b5a0defcf7d23d528e',
	},
	admin: {
		address: '0x00000000001',
	},
	poolOwner: {
		address: '0xb0d88027f5ded975ff6df7a62952033d67df277f',
	}
};
