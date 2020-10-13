import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public gridSize = 4;

  public mostrar(id){
    if (document.getElementById(id).style.display == 'block'){
      document.getElementById(id).style.display = 'none';
    }
    else {
      document.getElementById(id).style.display = 'block';
    }
  }

}
