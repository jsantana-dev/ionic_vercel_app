import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HpService, Book } from '../../services/hp.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage {
  book: Book | null = null;
  loading = true;

  constructor(private hp: HpService, private router: Router) {}

  ionViewWillEnter() {
    this.loadBook();
  }

  loadBook() {
    this.loading = true;
    // Carrega um livro aleatório
    this.hp.getRandomBook().subscribe((data: Book) => {
      this.book = data;
      this.loading = false;
    });
  }

  goToDetails(book: Book) {
    this.router.navigate(['/details'], { state: { book } });
  }
}