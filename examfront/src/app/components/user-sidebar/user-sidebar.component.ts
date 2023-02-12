import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit {

  category:Category[];
  constructor(private categoryservice:CategoryService) { }

  ngOnInit(): void {
    this.categoryservice.getCategories().subscribe(
      (data:any)=>{
        this.category=data

      }
    )

  }

}
