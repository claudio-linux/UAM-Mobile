import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parceiros',
  templateUrl: './parceiros.page.html',
  styleUrls: ['./parceiros.page.scss'],
})
export class ParceirosPage implements OnInit {

  partiners: Array<{name:string, category:string,  image:string}>;
  allPartiners:any;
  queryText:string;


  constructor() {
    this.queryText = '';
    this.partiners = [

      { name: 'Nigth Party', category: 'Balada', image: '/assets/icon/nighparty.jpg'},
      { name: 'Vivenda Friends', category: 'Amigos', image: '/assets/icon/friends1.jpg'},
      { name: 'Chacara Encantada', category: 'Família', image: '/assets/icon/familia1.jpg'},
      { name: 'Sítio dos Pombinhos', category: 'Casamento', image: '/assets/icon/married2.jpg'},
      { name: 'House Music', category: 'Casual', image: '/assets/icon/casual-party1.jpeg'},
      { name: 'Funny Party', category: 'Balada', image: '/assets/icon/nighparty2.jpg'},
      { name: 'Happy Birthday', category: 'Diversos', image: '/assets/icon/casual-party1.jpeg'},
      { name: 'Smile House', category: 'Família', image: '/assets/icon/familia2.jpeg'},
      { name: 'Forrozin', category: 'Balada', image: '/assets/icon/nighparty-forrozin.jpeg'},
      { name: 'Marrige Studio', category: 'Casamento', image: '/assets/icon/married1.jpg'},
    ];

    this.allPartiners = this.partiners;
  }
  
  getItens(part: any){

    let val = part.target.value;
    if(val && val.trim() != ''){

//      this.partiners = _.values(this.allPartiners);
      this.partiners = this.allPartiners.filter((partiner) =>{
        return(partiner.name.toLowerCase().indexOf(val.toLowerCase()) > -1) || partiner.category.toLowerCase().indexOf(val.toLowerCase()) > -1 ;
      })
    }else{
      this.partiners = this.allPartiners
    }
       
  }

  

  ngOnInit() {
  }

}
