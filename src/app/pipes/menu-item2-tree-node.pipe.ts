import { Pipe, PipeTransform } from '@angular/core';
import {TreeNode } from 'primeng/api';
import { MainMenu } from '../model/mein-menu';

@Pipe({
  name: 'menuItem2TreeNode'
})
export class MenuItem2TreeNodePipe implements PipeTransform {

  transform(value: MainMenu[]): TreeNode[] {
    const result: TreeNode[] = value.map(m => {
      let tn: TreeNode = {
        label: m.name,
      };

      if (m.children && m.children.length > 0){
        tn.expandedIcon = 'pi pi-folder-open';
        tn.collapsedIcon = 'pi pi-folder';
        tn.children = this.transform(m.children);
      }

      return tn;
    })
    return result;
  }

}
