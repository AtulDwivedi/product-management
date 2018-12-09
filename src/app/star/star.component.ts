import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5
    }
    @Input() rating: number;
    starWidth: number;


    @Output() notify: EventEmitter<string> = new EventEmitter<string>();

    onclick() {
        this.notify.emit(`The rating ${this.rating} was clicked.`);
    }
}