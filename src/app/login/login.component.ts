import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
// export class LoginComponent implements OnInit {
//   user: User=new User();
//   errorMessage!:string;
//   constructor(private loginService :LoginService, private router: Router) { }



//   ngOnInit() {
//   }

//   Login(){
    

//     this.loginService.logIn(this.user)
//       .subscribe(data=>{
//         this.router.navigate(['/http://localhost:9081/api/v1/user/login']);
//         },err=>{
//         this.errorMessage="error :  Username or password is incorrect";
//         }
//       )
//   }
export class LoginComponent {
 
  login :string ="";
  password: string ="";
 
 
  constructor(private router: Router,private http: HttpClient) {}
 
 
  Login() {
    console.log(this.login);
    console.log(this.password);
    let bodyData = {
      email: this.login,
      password: this.password,
    };
        this.http.post("http://localhost:9081/api/v1/user/login", bodyData).subscribe(  (resultData: any) => {
        console.log(resultData);
        if (resultData.message == "Email not exits")
        {
      
          alert("Email not exits");
    
        }
        else if(resultData.message == "Login Success")
    
         {
          this.router.navigateByUrl('/home');
        }
        else
        {
          alert("Incorrect Email and Password not match");
        }
 
      });
    
    }
 
}