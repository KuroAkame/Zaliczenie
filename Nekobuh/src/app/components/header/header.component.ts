import {Component, AfterViewInit, OnInit, OnDestroy} from '@angular/core';
import {RouterLink} from '@angular/router';
import {AuthService} from '../../_service/auth.service';
import {Subscription} from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  imports: [RouterLink,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit,OnDestroy{
  private autheticationSub!: Subscription;
  userAuthenticated = false;
  constructor(private authService:AuthService) {
  }
  ngOnDestroy():void{
    this.autheticationSub.unsubscribe();
  }
  ngOnInit(): void {
    this.autheticationSub = this.authService.getAuthenticatedSub().subscribe(status =>{
      this.userAuthenticated =status;
    })
    // Kodzik powoduje wlaczanie navbara
    const hamburger = document.getElementById('hamburger') as HTMLElement;
    const minibar = document.getElementById('minibar') as HTMLElement;
    const test = document.getElementById('test') as HTMLElement;
    const logout = document.getElementById('logout') as HTMLElement;
    if(hamburger&&minibar){
      hamburger.addEventListener('click',(e) =>{
        if(minibar){
          minibar.style.visibility = 'visible';
        }else{
          console.log('guwno i napletek')
        }
      })
      document.addEventListener('click',(event:MouseEvent)=>{
        const target = event.target as HTMLElement;
        if(!(minibar.contains(target)) && target !== hamburger && target !== test )
        {
          minibar.style.visibility = 'hidden';
        }
      })
    }
    //kodzik powoduje zamykanie navbara przez klinkiecie w zamkniecie badz gdziekolwiek poza
    const minimizer = document.getElementById('minimizer') as HTMLElement;
    if(minimizer)
    {
      minimizer.addEventListener('click', (e)=>{
        minibar.style.visibility = 'hidden';
      })
    }






  }
  logout(){
    this.authService.logout();
    console.log('dzieje sie');
  }
}
