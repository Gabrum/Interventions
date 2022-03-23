import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { VerifierCaracteresValidator } from '../shared/longueur-minimum/longueur-minimum.component';

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
    expect(errors['required']).toBeTruthy();
     });

  it('5 | Zone Prénom invalide avec 10 espaces', () =>{
    let zone = component.problemeForm.controls['prenom'];
    zone.setValue(' '.repeat(10))
    expect(zone.valid).toBeFalsy();
  });

  it('6 | Zone Prénom invalide avec 2 espaces et 1 caractère', () =>{
    let zone = component.problemeForm.controls['prenom'];
    zone.setValue('  a'.repeat(1))
    expect(zone.valid).toBeFalsy();
  });

  
  it('#7 | Une chaîne avec 10 espaces est invalide', () => {
    let control = { value: ' '.repeat(10) }
    let validatorFn =  VerifierCaracteresValidator.longueurMinimum(3);
    let result= validatorFn(control as AbstractControl);
    expect(result['nbreCaracteresInsuffisant']).toBe(true);
  });

  it('#5 | Zone PRÉNOM invalide avec 10 espaces', () => {
    let control = { value: ' '.repeat(10) }
    let validatorFn = VerifierCaracteresValidator.longueurMinimum(3);
    let result= validatorFn(control as AbstractControl);
    expect(result['nbreCaracteresInsuffisant']).toBe(true);
});

it('#6 | Zone PRÉNOM valide avec 2 espaces et 1 caractère', () => {
    let control = { value: "  ".repeat(2) }
    let validatorFn = VerifierCaracteresValidator.longueurMinimum(3);
    let result= validatorFn(control as AbstractControl);
    expect(result['nbreCaracteresInsuffisant']).toBe(true);
});

it('#7 | Zone PRÉNOM invalide avec 10 espaces', () => {
  let control = { value: ' '.repeat(10) }
  let validatorFn = VerifierCaracteresValidator.longueurMinimum(3);
  let result= validatorFn(control as AbstractControl);
  expect(result['nbreCaracteresInsuffisant']).toBe(true);
});

it('#8 | Une phrase avec des mots est valide', () => {
  let control = { value: ' bonjour monsieur' }
  let validatorFn = VerifierCaracteresValidator.longueurMinimum(3);
  let result= validatorFn(control as AbstractControl);
  expect(result== null).toBe(true);
});

it('#9 | Une phrase avec 3 espaces, des mots et ensuite 3 espaces est valide', () => {
  let control = { value: '   bonjour monsieur   ' }
  let validatorFn = VerifierCaracteresValidator.longueurMinimum(3);
  let result= validatorFn(control as AbstractControl);
  expect(result== null).toBe(true);
});

it('#10 | Une phrase avec 1 espace et 2 caractères est invalide.', () => {
  let control = { value: ' ad' }
  let validatorFn = VerifierCaracteresValidator.longueurMinimum(3);
  let result= validatorFn(control as AbstractControl);
  expect(result['nbreCaracteresInsuffisant']).toBe(true);
});

it('#11 | Une phrase avec 2 espaces et 1 caractère est invalide', () => {
  let control = { value: '  a' }
  let validatorFn = VerifierCaracteresValidator.longueurMinimum(3);
  let result= validatorFn(control as AbstractControl);
  expect(result['nbreCaracteresInsuffisant']).toBe(true);
});

it('#12 | Une phrase avec 3 espaces et 3 caractères est valide', () => {
  let control = { value: '   abc' }
  let validatorFn = VerifierCaracteresValidator.longueurMinimum(3);
  let result= validatorFn(control as AbstractControl);
  expect(result== null).toBe(true);
});

it('#13 | Une phrase avec 5 espaces, 5 caractères et 5 espaces est valide', () => {
  let control = { value: '     abcde     ' }
  let validatorFn = VerifierCaracteresValidator.longueurMinimum(3);
  let result= validatorFn(control as AbstractControl);
  expect(result== null).toBe(true);
});

it('Une chaîne nulle est invalide', () => {
  let control = {  }
  let validatorFn = VerifierCaracteresValidator.longueurMinimum(3);
  let result= validatorFn(control as AbstractControl);
  expect(result['nbreCaracteresInsuffisant']).toBe(true);
});
});

