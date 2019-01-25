/*引入核心模块的Component*/
import { Component } from '@angular/core';

/*装饰器*/
@Component({
  selector: 'app-root', /*使用这个组件的名称*/
  templateUrl: './app.component.html', /*组件默认的html*/
  styleUrls: ['./app.component.css']
})
/*暴露出这个组件*/
export class AppComponent {
  title = 'My First Angular App!'; /*定义属性*/
  constructor () { /*构造函数*/

  }
}
