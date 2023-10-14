import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  listado: any;
  constructor(private http: HttpClient, private user: UserService) {}

  ngOnInit() {
    this.http
      .get('http://localhost/ionic/consultados.php')
      .subscribe((data) => {
        console.log(data);
        this.listado = data;
      });
  }

  eliminar(id: any) {
    this.http
      .get(`http://localhost/ionic/eliminar.php?id=${id}`)
      .subscribe((data) => {
        console.log(`Exito al eliminar: ${data}`);
      });
    this.ngOnInit();
  }

  editar(id: any) {
    this.user.setId(id);
  }
}
