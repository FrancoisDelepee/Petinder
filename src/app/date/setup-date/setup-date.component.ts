import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PetService} from "../../service/pet.service";
import {Pet} from "../../model/Pet";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-setup-date',
  templateUrl: './setup-date.component.html',
  styleUrls: ['./setup-date.component.css']
})
export class SetupDateComponent implements OnInit {

  name: string | any;
  private sub: any;
  pet : Pet | any;

  sendTextForm = this.formBuilder.group(
    {
      text: ''
    }
  );

  constructor(private route: ActivatedRoute,
              private petservice: PetService,
              private formBuilder : FormBuilder) {
  }


  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.name = params['name']
    });

    this.petservice.getPetByName(this.name).subscribe(pet => this.pet = pet);
  }

  play(){
    this.petservice.play(this.sendTextForm.value.text).subscribe();
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
