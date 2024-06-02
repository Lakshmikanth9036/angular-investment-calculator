import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { InvestmentService } from '../investement.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService); // Inject service using signals
  // constructor(private investmentService: InvestmentService){} // Inject service using constructor

  results = computed(() => this.investmentService.resultsData());
  // results = this.investmentService.resultsData.asReadonly();
}
