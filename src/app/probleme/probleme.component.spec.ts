import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ProblemeComponent } from './probleme.component';

describe('ProblemeComponent', () => {
  let component: ProblemeComponent;
  let fixture: ComponentFixture<ProblemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ ProblemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('1 | Zone Prénom invalide avec 2 caractères', () =>{
    let zone = component.problemeForm.controls['prenom'];
    zone.setValue('a'.repeat(2))
    expect(zone.valid).toBeFalsy();
  });

  it('2 | Zone Prénom valide avec 3 caractères', () =>{
    let zone = component.problemeForm.controls['prenom'];
    zone.setValue('a'.repeat(3))
    expect(zone.valid).toBeTruthy();
  }); 

  it('3 | Zone Prénom valide avec 200 caractères', () =>{
    let zone = component.problemeForm.controls['prenom'];
    zone.setValue('a'.repeat(200))
    expect(zone.valid).toBeTruthy();
  });

  it('4 | Zone Prénom invalide avec aucune valeur', () =>{
    let zone = component.problemeForm.controls['prenom'];
    zone.setValue("a".repeat(0));
    let errors = zone.errors || {};
    expect(errors['required']).toBeFalsy();
     });

  it('5 | Zone Prénom valide avec 10 espaces', () =>{
    let zone = component.problemeForm.controls['prenom'];
    zone.setValue(' '.repeat(10))
    expect(zone.valid).toBeTruthy();
  });

  it('6 | Zone Prénom valide avec 2 espaces et 1 caractère', () =>{
    let zone = component.problemeForm.controls['prenom'];
    zone.setValue('  a'.repeat(1))
    expect(zone.valid).toBeTruthy();
  });
});

