import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';


@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})


export class NavComponent implements OnInit {
  @ViewChild('brand') brand:any;
  knowledges:string[] = 
  ["HTML","CSS","BOOTSTRAP","SCSS","JAVASCRIPT","ANGULAR"];
  timer:number = 4000;

  constructor() { }

  ngOnInit(): void {
    this.initBrandAnim();
    setInterval(() => {
      this.initBrandAnim();
    },this.knowledges.length * this.timer + 100)
  }

  toggleActive(toggler:any, navbarLinks:any){
    toggler.classList.toggle("active");
    navbarLinks.classList.toggle("active");
  }

  initBrandAnim(){
    let indexPrev = 0;
    this.knowledges.forEach((knowledge,index) => {
      let arr = Array.from(knowledge);
        arr.forEach((char, indexInner) => [
          setTimeout(() => {
            try{
              if(index == indexPrev){
                (this.brand as ElementRef).nativeElement.innerHTML = "";
                indexPrev++;
              }
              (this.brand as ElementRef).nativeElement.innerHTML += char;
            }catch(err){
              console.log(err);
            }
          }, index * this.timer + (this.timer / arr.length) * indexInner)
        ])
    })
  }


}
