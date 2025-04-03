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

  count:number = 0
  
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
}



// @Directive({
//   selector: '[changecolor]'
// })

// export class ChangeTogreen {
// }
