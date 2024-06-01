import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  constructor(private titleService: Title, private renderer: Renderer2) {
    this.titleService.setTitle('Aditya Chavan - Resume');
}

DownloadFile() {
const link = this.renderer.createElement('a');
link.setAttribute('target', '_blank');
link.setAttribute('href', '../../assets/AdityaChavanResume.pdf');
link.setAttribute('download', 'AdityaChavanResume.pdf');
link.click();
link.remove();
}
}
