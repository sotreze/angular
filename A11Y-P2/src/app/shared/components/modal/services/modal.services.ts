import { ModalComponent } from './../modal.component';
import { ComponentFactory, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { ModalConfig } from '../interfaces/modal-config';

@Injectable()
export class ModalService {

  private componentFactory: ComponentFactory<ModalComponent>;

  constructor(
    componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
    ) {
    this.componentFactory = componentFactoryResolver.resolveComponentFactory(ModalComponent);
  }

  public open(config: ModalConfig): ModalRef {
    const componentRef = this.componentFactory.create(this.injector);
    console.log('open called');
    return new ModalRef();
  }
}

export class ModalRef {
  public close(): void {
    console.log('close called');
  }
}
