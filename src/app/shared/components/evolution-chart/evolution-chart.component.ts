import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-evolution-chart',
  templateUrl: './evolution-chart.component.html',
  styleUrls: ['./evolution-chart.component.scss'],
  standalone: true,
  imports: [CommonModule, NgChartsModule]
})
export class EvolutionChartComponent implements OnInit {
  @Input() applications: any[] = [];

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        label: 'Percentual de sucesso',
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: 'origin',
      }
    ],
    labels: []
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Data e hora da aplicação'
        }
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Percentual de sucesso (%)'
        }
      }
    },
    plugins: {
      colors: {},
      legend: {
        display: true,
        position: 'top',
      },
    }
  };
  

  public lineChartType: ChartType = 'line';

  constructor() { }

  ngOnInit(): void {
    this.setChartData();
  }

  setChartData() {
    const sortedApplications = this.applications.sort((a, b) =>
      new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );
    
    this.lineChartData.labels = sortedApplications.map(app =>
      new Date(app.createdAt).toLocaleString()
    );
    
    this.lineChartData.datasets[0].data = sortedApplications.map(app => app.positivePercentage);
  }
}