export const environment = {
    production: true,
    menu: [
        {
            text: 'Pay',
            active: false,
            url: '/payment',
            target: '_self'
        },
        {
            text: 'Pool  CUSD / USDT / USDC',
            active: false,
            url: '/pool1',
            target: '_self'
        },
        {
            text: 'Stake LP CUSD / USDT / USDC',
            active: false,
            url: '/stake1',
            target: '_self'
        },
        {
            text: 'Docs',
            active: false,
            url: 'https://docs.cstable.fi',
            target: '_blank'
        }
    ],
    rpc: {
        url: 'https://forno.celo.org'
    },
    pool1: {
		address: '0x6000901514cDe3b920a32c7BD0663325fe296DA8',
	},
	liqudityFarmingProxy: {
		address: '0x11c82560FDe1e42A43c9011c458fe5948B22cdBa'
	},
	bstToken: {
		address: '0xcDe7Ee7D47dC62c608320793D13d079965205A3C'
	},
	paymentFarmingProxy: {
		address: '0x5565B5642A7dEE655935fFf2EA209079ac7Cc09F'
	},
	cusd: {
		address: '0x765DE816845861e75A25fCA122bb6898B8B1282a'
	},
	usdt: {
		address: '0x88eeC49252c8cbc039DCdB394c0c2BA2f1637EA0'
	},
	usdc: {
		address: '0xef4229c8c3250C675F21BCefa42f58EfbfF6002a'
	}
};
