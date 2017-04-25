import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { DateUtils, DataUtils, EventManager } from 'ng-jhipster';
import { OsnoreggatewayTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { FileDetailComponent } from '../../../../../../main/webapp/app/entities/file/file-detail.component';
import { FileService } from '../../../../../../main/webapp/app/entities/file/file.service';
import { File } from '../../../../../../main/webapp/app/entities/file/file.model';

describe('Component Tests', () => {

    describe('File Management Detail Component', () => {
        let comp: FileDetailComponent;
        let fixture: ComponentFixture<FileDetailComponent>;
        let service: FileService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [OsnoreggatewayTestModule],
                declarations: [FileDetailComponent],
                providers: [
                    DateUtils,
                    DataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    FileService,
                    EventManager
                ]
            }).overrideComponent(FileDetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(FileDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(FileService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new File(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.file).toEqual(jasmine.objectContaining({id:10}));
            });
        });
    });

});
