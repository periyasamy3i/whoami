import { Component, OnInit } from '@angular/core';
declare var require: any
const FileSaver = require('file-saver');
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  downloadResume(){
    const pdfUrl = './assets/RESUME_PERIYASAMY_ORACLE.pdf';
    const pdfName = 'RESUME_PERIYASAMY_ORACLE.pdf';
    FileSaver.saveAs(pdfUrl, pdfName);
  }
}
