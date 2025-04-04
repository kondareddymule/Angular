import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name: any ="Reddy"

  value: any  = "Hello"

  count:number = 0
  Mulekondareddy: string = "Mule Konda Reddy"


  array: number[] = [1,2,3,4,5,8,9,9]
  
  increaseCount() {
    if (this.count < 20) {
      this.count++
    }
  }

  decreaseCount() {
    if(this.count > 0) {
      this.count--
    }
  }

  getdata(e: any) {
    this.value = e.target.value
  }
}



// @Directive({
//   selector: '[changecolor]'
// })

// export class ChangeTogreen {
// }
