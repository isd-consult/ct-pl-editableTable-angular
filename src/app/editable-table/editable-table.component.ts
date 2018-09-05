import { Component, OnInit } from '@angular/core';
import raw from '../../data/plRawData.json';
import cleanTheData from '../../data/cleanTheData';
@Component({
  selector: 'app-editable-table',
  templateUrl: './editable-table.component.html',
  styleUrls: ['./editable-table.component.less']
})
export class EditableTableComponent implements OnInit {
  i = 1;
  editCache = {};
  // antdataSet = [];
  dataSet = cleanTheData(raw);
  raw = raw;
  dateFormat = 'dd.MM.YYYY';

  startEdit(key: string): void {
    this.editCache[key].edit = true;
  }

  cancelEdit(key: string): void {
    this.editCache[key].edit = false;
  }

  saveEdit(key: string): void {
    const index = this.dataSet.findIndex(item => item.key === key);
    this.dataSet[index] = this.editCache[key].data;
    this.editCache[key].edit = false;
  }

  updateEditCache(): void {
    this.dataSet.forEach(item => {
      if (!this.editCache[item.key]) {
        this.editCache[item.key] = {
          edit: false,
          data: item
        };
      }
    });
  }

  ngOnInit(): void {
    // for (let i = 0; i < 100; i++) {
    //   this.antdataSet.push({
    //     key: i.toString(),
    //     name: `Edrward ${i}`,
    //     age: 32,
    //     address: `London Park no. ${i}`
    //   });
    // }
    // console.log(this.antdataSet);
    console.log(cleanTheData(raw));
    this.updateEditCache();
  }
}
