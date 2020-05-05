import { Component, OnInit } from '@angular/core'

// init WarpJS
import WarpServer from 'warp-server'
const { getUsers } = new WarpServer()

@Component({
  selector: 'app-root',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users = null

  constructor() {}

  ngOnInit() {
    getUsers().then((data) => {
      this.users = data
    })
  }
}
