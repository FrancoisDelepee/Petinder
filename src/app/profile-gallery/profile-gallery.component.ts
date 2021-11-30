import {Component, OnInit} from '@angular/core';
import {Pet} from "../model/Pet";
import {PetService} from "../service/pet.service";
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-profile-gallery',
  templateUrl: './profile-gallery.component.html',
  styleUrls: ['./profile-gallery.component.css']
})
export class ProfileGalleryComponent implements OnInit {

  pets: Pet[] = [];
  selectedPet: Pet | any;
  searchText: string | any;


  checkoutForm = this.formBuilder.group({
    name: '',
    kind: '',
    image: '',
    profileText: '',
    popularity: ''
  });

  constructor(private petService: PetService, private formBuilder: FormBuilder) {

  }

  onSubmit(): void{
    console.warn('function onSubmit() is called', this.checkoutForm.value);
    this.petService.addPet(this.checkoutForm.value).subscribe(data => {this.getPets()});
  }

  getPets(): void {
    this.petService.getPets().subscribe(pets => this.pets = pets);
  }

  selectPet(pet: Pet) {
    this.selectedPet = pet;
  }

  ngOnInit(): void {
    this.getPets();
  }

  deletePet(id:number) {
    this.petService.deletePet(id).subscribe(() => {this.getPets();
      this.selectedPet = undefined;});

  }
}
