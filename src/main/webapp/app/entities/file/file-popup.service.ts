import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { File } from './file.model';
import { FileService } from './file.service';
@Injectable()
export class FilePopupService {
    private isOpen = false;
    constructor(
        private modalService: NgbModal,
        private router: Router,
        private fileService: FileService

    ) {}

    open(component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.fileService.find(id).subscribe((file) => {
                if (file.createdDate) {
                    file.createdDate = {
                        year: file.createdDate.getFullYear(),
                        month: file.createdDate.getMonth() + 1,
                        day: file.createdDate.getDate()
                    };
                }
                this.fileModalRef(component, file);
            });
        } else {
            return this.fileModalRef(component, new File());
        }
    }

    fileModalRef(component: Component, file: File): NgbModalRef {
        const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.file = file;
        modalRef.result.then((result) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.isOpen = false;
        }, (reason) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.isOpen = false;
        });
        return modalRef;
    }
}
