import {AfterViewInit, Component, OnInit, ViewChild,} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from "./dialog/dialog.component";
import { DialogListComponent } from "./dialog-list/dialog-list.component";
import { ChangeDetectionStrategy } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map,tap} from "rxjs/operators";
import {CdkScrollable, ScrollDispatcher} from "@angular/cdk/overlay";
import {BehaviorSubject} from "rxjs";
import {CdkVirtualScrollViewport} from "@angular/cdk/scrolling";


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit{
  // @ViewChild(CdkVirtualScrollViewport) scroller: CdkVirtualScrollViewport;
  // post: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  // postCount = 1
  //
  ageControl: boolean = true;
  dateNow = Date.now()
  adult = 1000 * 60 * 60 * 24 * 360 * 18;
  max = this.dateNow - this.adult;
  maxDate = new Date(this.max);
  // form: any;

  // get formControls() {
  //   return this.form.controls;
  // }

  constructor(private fb: FormBuilder, public dialog: MatDialog,
              private http: HttpClient, private scroll: ScrollDispatcher,
              private _formBuilder: FormBuilder){
    // this.form = this.fb.group({
    //   date: ['date',, Validators.required]
    // })


  }





// first dialog

  // animal: string = '';
  // name: string = '';
  //
  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogComponent, {
  //     width: '250px',
  //     data: {name: this.name, animal: this.animal},
  //   });
  //
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.animal = result;
  //   });
  // }
// second dialog

  // openDialogList() {
  //   this.dialog.open(DialogListComponent, {
  //     data: {
  //       animal: 'panda',
  //     },
  //   });
  // }
  //
  // // scroll bar
  //
  // items = Array.from({length: 100}).map((n, i) => `Item #${i}`);
  //
  // // blog comments
  //
  // array:string[] = [];
  //
  // private onWindowScroll(data: any) {
  //   const scrollTop = data.getElementRef().nativeElement.scrollTop || 0;
  //   // if (this.lastOffset() > scrollTop) {
  //   //   console.log('111');
  //   // } else if (scrollTop < 10) {
  //   //   console.log('222');
  //   // } else if (scrollTop > 100) {
  //   //   console.log('333');
  //   // }
  //   if(scrollTop > 0){
  //     this.postCount++;
  //     this.post.next(this.postCount);
  //   }
  //   console.log('scrollTop' + scrollTop)
  //   // console.log('postCount' + this.postCount)
  //   // console.log(this.post.value)
  //   // this.lastOffset() = scrollTop;
  // }
  //
  // private lastOffset() {}
  //
  // ngOnInit() {
  //   this.http
  //     .get(`https://jsonplaceholder.typicode.com/posts/${this.post.value}/comments`)
  //     .pipe(
  //       map((value: any) => {
  //         value.map((el: any) => this.array = [...this.array, el.email])
  //         this.scroll
  //           .scrolled()
  //           .subscribe((data) => {
  //             this.onWindowScroll(data);
  //           });
  //       }),
  //       tap((val) => console.log(this.array))
  //     )
  //     .subscribe();
  // }


  // stepper

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', [Validators.required, Validators.minLength(6)]],
  });
  form = this._formBuilder.group(
    {
    date: ['', this.ValidateAge]
    },
    {

    });
  isLinear = false;

  OnDateChange(event: any){
    if(event.getTime() > this.maxDate.getTime()){
      this.ageControl = false;
    }else {
      this.ageControl = true;
    }
  }


  ValidateAge(control: FormControl){
    // const controlDate = new Date(control)
    if(control.value){
      console.log(control.value)
    }
  }

  ngOnInit() {
  }
}
