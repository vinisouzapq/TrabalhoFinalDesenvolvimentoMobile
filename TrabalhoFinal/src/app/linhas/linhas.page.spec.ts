import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LinhasPage } from './linhas.page';

describe('LinhasPage', () => {
  let component: LinhasPage;
  let fixture: ComponentFixture<LinhasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinhasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LinhasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
