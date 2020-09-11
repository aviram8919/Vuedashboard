<template>
  <div class="team">
    <v-container class="my-7">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card class="ma-3" max-width="500" elevation="10" shaped>
            <v-responsive clas="pt-4">
                <router-link  :to = "person.link">
                    <v-img
                    class="white--text align-end"
                    height="200px"
                    :src = "person.img"
                    >
                    </v-img>
                </router-link>  
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{person.name}} </div>
              <div class="grey-text">{{person.text}} (C)</div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        { name: "Chennai Super Kings", text: "MS Dhoni ", link:"/chennai", img:"https://1.bp.blogspot.com/-WpzPK4O-qmE/XekFs-yeeXI/AAAAAAAAPp0/UqYrYIDkjKYoZ5yUOe2sSOgQQR60CMRCgCEwYBhgL/s640/csk-logo.png"},
        { name: "Mumbai Indians", text: "Rohit Sharma", link:"/mumbai", img:"https://www.vhv.rs/file/max/29/294055_ipl-logo-png.png" },
        { name: "Delhi Capitals", text: "Shreyas Iyer", link:"/delhi", img:"https://i.pinimg.com/originals/af/71/61/af716151c4fdd830acca9c1266b953c1.png" },
        { name: "Sunrises Hyderabad", text: "Kane Williamson", link:"/hyderabad", img:"https://mk0cricadium1m5ehxty.kinstacdn.com/wp-content/uploads/2019/03/Untitled-design-9.jpg"},
        { name: "Kolkata Knight Riders", text: "Dinesh  Karthik ", link:"/kolkata", img:"https://2.bp.blogspot.com/-Yex33W6dCiw/VRFS0rCT6kI/AAAAAAAAAho/q2-m09PGuqI/s1600/kkr1.jpg" },
        { name: "Kings XI Punjab", text: "KL Rahul", link:"/punjab", img:"https://media1.santabanta.com/full1/Cricket/IPL%202020/ipl-2020-4e.jpg" },
        { name: "Rajashthan Royals", text: "Steve Smith", link:"/rajasthan", img:"https://seeklogo.com/images/I/ipl-rajasthan-royals-logo-F69DDCEF15-seeklogo.com.png" },
        { name: "Royal Challengers Bangalore", text: "Virat Kohli", link:"/banglore", img:"https://i.pinimg.com/originals/86/a9/8f/86a98f70b84cd8608611a6b48b4916cd.png" },
      ],
    };
  },
};
</script>