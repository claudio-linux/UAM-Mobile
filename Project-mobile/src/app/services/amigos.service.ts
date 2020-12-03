import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Amigo {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;

}

@Injectable({
  providedIn: 'root'
})
export class AmigosService {

  private contacts: Amigo[] = [];

  constructor(private storage: Storage) {
    this.storage.get('contacts')
      .then(storedContacts => this.contacts.push(...storedContacts))
  }

  public all() {
    return this.contacts;
  }

  public get(username: string) {
    return this.contacts.find(c => c.username === username);
  }

  public create(contact: Amigo) {
    this.contacts.push({ ...contact });
    this.storage.set('contacts', this.contacts);
  }

  public update(contact: Amigo, username: string) {
    const idx = this.contacts.findIndex(c => c.username === username);
    this.contacts[idx] = { ...contact };
    this.storage.set('contacts', this.contacts);
  }


  //////////////////////
////////////


  public empty(): Amigo {
    return {
      id: null,   
      username: '',
      name: '',
      email: '',
      phone: '',
    }
  }
///////////////////////////
  public allAmigos(): Readonly<Array<Readonly<Amigo>>> {
    return this.contacts;
  }

  public find(name: string): Amigo {
    return {
      ...this.contacts.find(c => c.name === name)
    };
  }

  public updated(updatedContact: Amigo): void{
    const itemIndex = this.contacts.findIndex(c => c.name === updatedContact.name);
    this.contacts[itemIndex] = updatedContact;
    this.storage.set('name', this.contacts);
  }

  public created(newContact: Amigo){
    const maxContact = Math.max(...this.contacts.map(c => c.id));
    this.contacts.push({
      ...newContact, id: maxContact + 1
    });
    this.storage.set('name', this.contacts);
  }

}


