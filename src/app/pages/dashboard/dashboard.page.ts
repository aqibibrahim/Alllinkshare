import { Component, OnInit } from '@angular/core';
import {GetApisService} from '../../services/get-apis.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  allcategories:any;
  constructor(public getapi: GetApisService) { }

  ngOnInit() {
    this.GetAllCategory();
  }
  
  GetAllCategory(){
    this.getapi.categorylist().subscribe(data => {
      this.allcategories = data;
      console.log(this.allcategories);
      /* this.Databrandlist = [];
        angular.forEach($scope.brandlistAll, function(value, key){
            $scope.Databrandlist.push({"brand_id":value.brand_id, "Name":value.Name, "Image":$rootScope.brandimgs +'/'+value.image});
      }) */
    });
  }
  sbcategory_open(cat_id){
    console.log(cat_id);
  }

}
