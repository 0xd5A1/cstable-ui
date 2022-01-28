import { Component } from '@angular/core';
import { ethers } from 'ethers';
import { BootService } from './boot.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less']
})
export class AppComponent {
	title = 'refund';
	constructor(public boot: BootService) {

	}
	getTotalPaymentFeeIncome() {
		return ethers.utils.formatEther(this.boot.paymentFeeIncomeUsdc.add(this.boot.paymentFeeIncomeBusd).add(this.boot.paymentFeeIncomeUsdt));
	}
	getTotalAdminFeeIncome() {
		return ethers.utils.formatEther(this.boot.adminFeeIncomeUsdc.add(this.boot.adminFeeIncomeBusd).add(this.boot.adminFeeIncomeUsdt));
	}
	getTotalIncome() {
		return ethers.utils.formatEther(this.boot.paymentFeeIncomeUsdc.add(this.boot.paymentFeeIncomeBusd).add(this.boot.paymentFeeIncomeUsdt).add(this.boot.adminFeeIncomeUsdc).add(this.boot.adminFeeIncomeBusd).add(this.boot.adminFeeIncomeUsdt));
	}
}
