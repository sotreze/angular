import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ModalRef, ModalService } from './shared/components/modal/services/modal.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('modal') public modalTemplatRef: TemplateRef<any>;
  title = 'a11y-p2';
  public firstName= 'Marcio';
  public modalRef: ModalRef;

  constructor(private modaService: ModalService) {}

  public show(): void {
    this.modalRef = this.modaService.open({
      templateRef: this.modalTemplatRef,
      title: 'User Details'
    });
  }
}
