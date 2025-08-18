import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { initFlowbite } from 'flowbite/lib/esm/components';
import { FlowbiteService } from '../../srvices/flowbite.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

constructor(private flowbiteService: FlowbiteService) {}

  ngOnInit(): void {




  // this.checkToken();

  // // متابعة أي تغيير في localStorage (حتى من نفس التبويب)
  // window.addEventListener('storage', () => {
  //   this.checkToken();
  // });



    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  }

// checkToken() {
//   const token = localStorage.getItem('userToken');
//   if (token) {
//     console.log('في', token);
//   } else {
//     console.log('مفيش');
//   }
// }

}
