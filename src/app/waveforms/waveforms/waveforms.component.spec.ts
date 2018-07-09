import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaveformsComponent } from './waveforms.component';
import {EventService} from '../../core/event.service';
import {Event} from '../../event';
import {of} from 'rxjs/observable/of';
import { RouterTestingModule } from '@angular/router/testing';

describe('WaveformsComponent', () => {
  let component: WaveformsComponent;
  let fixture: ComponentFixture<WaveformsComponent>;

  beforeEach(async(() => {
    const eventServiceStub = {
      event$: of(new Event({})),
      product$: of(null)
    };

    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ WaveformsComponent ],
      providers: [
        {provide: EventService, useValue: eventServiceStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaveformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
