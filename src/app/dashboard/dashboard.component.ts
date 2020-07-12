import { Component, OnInit, ModuleWithComponentFactories } from '@angular/core';
import { MainMenu } from '../model/mein-menu';
import { HelpersService } from '../helpers.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  items: MainMenu[];
  currentDraggableItem: MainMenu = null;

  constructor(private helpers: HelpersService) { }

  ngOnInit(): void {
    this.items = this.helpers.getMainMenu();
  }

  onDrop(event): void {
    let target = event.target.closest('app-plitka');
    if (!event.target.closest('app-plitka')) {
      target = event.target.querySelectorAll('app-plitka')[0];
    }
    this.array_move(this.currentDraggableItem.id, parseInt(target.getAttribute("data-id")));
    this.currentDraggableItem = null;

  }

  onDragStart(event, item): void {
    this.currentDraggableItem = item;
  }

  array_move(idOne: number, idTwo: number): void {
    const old_index = this.items.findIndex(f => f.id === idOne);
    const new_index = this.items.findIndex(f => f.id === idTwo);
    if (new_index >= this.items.length) {
      var k = new_index - this.items.length + 1;
      while (k--) {
        this.items.push(undefined);
      }
    }
    this.items.splice(new_index, 0, this.items.splice(old_index, 1)[0]);
  };
}
