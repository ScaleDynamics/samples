import { Component, OnInit } from '@angular/core'

// init backend module
import WarpServer from 'warp-server'
const { getUsers } = new WarpServer({}) as any

@Component({
  selector: 'app-root',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users = null

  constructor() {}

  async ngOnInit() {
    // call backend function
    this.users = await getUsers()
  }
}
