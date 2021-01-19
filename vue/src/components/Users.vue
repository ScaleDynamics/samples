<template>
  <div class="users">
    <div v-if="users && users.length">
      <ul>
        <li v-for="item in users" :key="item.id">
          <img :src="item.photo" />
          <h3>{{ item.name }}</h3>
          <p>✉️ {{ item.email }}</p>
          <p>📞 {{ item.phone }}</p>
          <p>🏢 {{ item.work }}</p>
          <p>🏠 {{ item.city }}</p>
        </li>
      </ul>
    </div>
    <div v-if="!users" class="message">loading...</div>
  </div>
</template>

<script>
// init WarpJS
import WarpServer from 'warp-server'
const { getUsers } = new WarpServer()

export default {
  name: 'Users',
  data: function() {
    return {
      users: null
    }
  },
  mounted: function() {
    getUsers().then((data) => {
      this.users = data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.users {
  margin: 32px 0;
}

.message {
  text-align: center;
  margin: 15px;
}

.users ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0 auto;
}

.users li {
  position: relative;
  width: 300px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 5px 15px;
  background-color: white;
  border-radius: 5px;
  margin: 10px;
}

.users .id {
  position: absolute;
  top: 0;
  left: 0;
  background: #dddfe3;
  color: #666;
  padding: 5px 10px;
  border-top-left-radius: 5px;
  border-bottom-right-radius: 2px;
  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.08);
}
.users img {
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin: 15px 0 0;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
.users h3 {
  text-align: center;
  padding-bottom: 15px;
  border-bottom: 1px solid #d8d8d8;
}
</style>
