import { ApplicationRef, Injectable } from '@angular/core';
import { ethers } from "ethers";
import { environment } from '../environments/environment';
import ERC20 from 'libs/abi/ERC20.json';
import PaymentFarmingProxy from 'libs/abi/PaymentFarmingProxy.json';
import BstablePool from 'libs/abi/BstablePool.json';
import RefundJson from 'libs/abi/Refund.json';
import { Network } from '@ethersproject/providers';

@Injectable({
	providedIn: 'root'
})
export class BootService {

	public mainnetJsonRpcProvider: ethers.providers.JsonRpcProvider;
	public accounts;
	public web3Provider: ethers.providers.Web3Provider;

	public paymentFeeIncomeUsdc = ethers.BigNumber.from(0);
	public paymentFeeIncomeBusd = ethers.BigNumber.from(0);
	public paymentFeeIncomeUsdt = ethers.BigNumber.from(0);
	public adminFeeIncomeUsdc = ethers.BigNumber.from(0);
	public adminFeeIncomeBusd = ethers.BigNumber.from(0);
	public adminFeeIncomeUsdt = ethers.BigNumber.from(0);
	public paymentContract: ethers.Contract;
	public usdcContract: ethers.Contract;
	public busdContract: ethers.Contract;
	public usdtContract: ethers.Contract;
	public poolContract: ethers.Contract;
	tokenContract: ethers.Contract;
	refundContract: ethers.Contract;
	userInfo: any = { fund: ethers.BigNumber.from(0) };
	network: Network;
	fundsBalance = ethers.BigNumber.from(0);

	constructor(private applicationRef: ApplicationRef) {
		this.mainnetJsonRpcProvider = new ethers.providers.JsonRpcProvider(environment.mainnet.rpc.url);
		this.paymentContract = new ethers.Contract(environment.mainnet.payment.address, PaymentFarmingProxy.abi, this.mainnetJsonRpcProvider);
		this.usdcContract = new ethers.Contract(environment.mainnet.usdc.address, ERC20.abi, this.mainnetJsonRpcProvider);
		this.busdContract = new ethers.Contract(environment.mainnet.busd.address, ERC20.abi, this.mainnetJsonRpcProvider);
		this.usdtContract = new ethers.Contract(environment.mainnet.usdt.address, ERC20.abi, this.mainnetJsonRpcProvider);
		this.poolContract = new ethers.Contract(environment.mainnet.pool.address, BstablePool.abi, this.mainnetJsonRpcProvider);
		this.paymentContract.devAddress().then(dev => {
			this.usdcContract.balanceOf(dev).then(bal => {
				this.paymentFeeIncomeUsdc = bal;
			});
			this.busdContract.balanceOf(dev).then(bal => {
				this.paymentFeeIncomeBusd = bal;
			});
			this.usdtContract.balanceOf(dev).then(bal => {
				this.paymentFeeIncomeUsdt = bal;
			});
		});
		this.poolContract.admin_balances(0).then(fee => {
			this.adminFeeIncomeUsdc = fee;
		});
		this.poolContract.admin_balances(1).then(fee => {
			this.adminFeeIncomeBusd = fee;
		});
		this.poolContract.admin_balances(2).then(fee => {
			this.adminFeeIncomeUsdt = fee;
		});
	}

	public connentMetaMask() {
		// @ts-ignore
		if (window && window.ethereum) {
			let loadData = (_network) => {
				this.network = _network;
				this.refundContract = new ethers.Contract(RefundJson.networks[_network.chainId].address, RefundJson.abi, this.web3Provider);
				return this.refundContract.userInfo(this.accounts[0]).then(_userInfo => {
					this.userInfo = _userInfo;
					return this.refundContract.token().then(_token => {
						this.tokenContract = new ethers.Contract(_token, ERC20.abi, this.web3Provider);
						let tokenTranferFilter = this.tokenContract.filters.Transfer(null, this.accounts[0], null);
						this.tokenContract.on(tokenTranferFilter, (from, to, amt) => {
							this.refundContract.userInfo(this.accounts[0]).then(_userInfo => {
								this.userInfo = _userInfo;
							});
							this.tokenContract.balanceOf(this.refundContract.address).then(bal => {
								this.fundsBalance = bal;
							});
						});
						return this.tokenContract.balanceOf(this.refundContract.address).then(bal => {
							this.fundsBalance = bal;
							this.applicationRef.tick();
						});
					});
				});
			};
			//@ts-ignore
			window.ethereum.request({ method: 'eth_requestAccounts', param: [] }).then(() => {
				// @ts-ignore
				this.web3Provider = new ethers.providers.Web3Provider(window.ethereum);
				this.web3Provider.getNetwork().then(_network => {
					loadData(_network);
				});
				// @ts-ignore
				window.ethereum.request({ method: 'eth_accounts', parma: [] }).then(accounts => {
					this.accounts = accounts;
					this.applicationRef.tick();
				});
			});
			//@ts-ignore
			window.ethereum.on("chainChanged", async (chainId: string) => {
				// @ts-ignore
				this.web3Provider = new ethers.providers.Web3Provider(window.ethereum);
				this.web3Provider.getNetwork().then(_network => {
					loadData(_network);
				});
				// @ts-ignore
				window.ethereum.request({ method: 'eth_accounts', parma: [] }).then(accounts => {
					this.accounts = accounts;
					this.applicationRef.tick();
				});
			});
			//@ts-ignore
			window.ethereum.on("accountsChanged", async (accounts) => {
				this.accounts = accounts;
				this.web3Provider.getNetwork().then(_network => {
					loadData(_network);
				});
			});
		}
	}

	public formatEther(b: ethers.BigNumber) {
		return ethers.utils.formatEther(b);
	}

	public isAdmin() {
		if (this.accounts && this.accounts.length > 0) {
			if (this.accounts[0] === environment.admin.address
				|| this.accounts[0] === environment.deployer.address
				|| this.accounts[0] === environment.poolOwner.address) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	}

	public withdrawRefund(): Promise<any> {
		if (this.refundContract) {
			return this.refundContract.connect(this.web3Provider.getSigner()).withdraw().then(() => {
				this.refundContract.userInfo(this.accounts[0]).then(_userInfo => {
					this.userInfo = _userInfo;
				});
				return true;
			}).catch(e => {
				alert(e.data.message);
			});
		} else {
			return Promise.reject();
		}
	}

	public withdrawAllFunds(): Promise<any> {
		if (this.refundContract) {
			return this.refundContract.connect(this.web3Provider.getSigner()).withdrawAll().then(() => {
				this.refundContract.userInfo(this.accounts[0]).then(_userInfo => {
					this.userInfo = _userInfo;
				});
				return true;
			}).catch(e => {
				alert(e.data.message);
			});
		} else {
			return Promise.reject();
		}
	}

}
