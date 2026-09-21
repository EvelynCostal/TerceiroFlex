import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SideMenu } from '../../components/menu-lateral/menu-lateral';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, SideMenu],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit, OnDestroy {
  @ViewChild('carrossel', { static: false }) carrosselRef!: ElementRef;
  private intervaloAutoScroll: any;

  ngOnInit(): void {
    this.iniciarAutoScroll();
  }

  ngOnDestroy(): void {
    this.pararAutoScroll();
  }

  moverCarrossel(direcao: number) {
    const container = this.carrosselRef.nativeElement;
    const larguraItem = container.querySelector('.item-carrossel').offsetWidth + 20;
    container.scrollBy({ left: direcao * larguraItem, behavior: 'smooth' });
  }

  iniciarAutoScroll() {
    this.intervaloAutoScroll = setInterval(() => {
      const container = this.carrosselRef.nativeElement;
      if (container) {
        const maxScroll = container.scrollWidth - container.clientWidth;
        // Se chegou ao fim, volta para o início de forma suave
        if (container.scrollLeft >= maxScroll - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: 320, behavior: 'smooth' });
        }
      }
    }, 3500); // Rola a cada 3.5 segundos
  }

  pararAutoScroll() {
    if (this.intervaloAutoScroll) {
      clearInterval(this.intervaloAutoScroll);
    }
  }
}