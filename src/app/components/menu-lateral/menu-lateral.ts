import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../servicos/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './menu-lateral.html',
  styleUrl: './menu-lateral.css'
})
export class SideMenu {
  menuAberto = false;
  constructor(private authService: AuthService, private router: Router) {}

  alternarMenu() {
    this.menuAberto = !this.menuAberto;
  }

  fecharMenu() {
    this.menuAberto = false;
  }

  sair() {
    this.authService.fazerLogout();
    this.router.navigate(['/login']);
  }
}