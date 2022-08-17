import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { UniqueIdService } from "../../unique-id.service";
import { LikeWidgetComponent } from "./like-widget.component";

@NgModule({
    declarations: [LikeWidgetComponent],
    imports: [
        CommonModule,
        FontAwesomeModule
    ],
    exports: [LikeWidgetComponent],
    providers: [UniqueIdService]
})
export class LikeWidgetModule{}
