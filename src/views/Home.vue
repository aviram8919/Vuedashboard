<template>
    <div>
        <div class="conatiner">

            <div class="content" v-for="text in Data" :key="text.name">
                {{text.name}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            Data : [
                { name: " Broadcasting rights of IPL 2018 are sold for a whopping ₹16347.5 crore to Star India Network. It means 1 ball costs around 21 Lakh Rupees." },
                {name: "IPL is the first tournament in the cricket history where four female commentators participate in the commentary. This happens in IPL 2015."},
                { name: "In IPL, Delhi Daredevils is the only team that had never played an IPL Final." },
                { name: "Praveen Kumar had bowled the highest number of dot balls in the history of IPL. He has bowled 1075 dot balls in 119 Matches." },
                { name: "Interestingly, Praveen Kumar is also the bowler who has bowled the first-ever over in IPL." },
                {name:"Again, Praveen Kumar is the bowler who has bowled the most number of maiden overs in the history of IPL. He has bowled 14 maiden overs."},
                {name:"Instead of a two-year suspension from the IPL, CSK has reached the final 6 times, most by any team in the history of IPL."},
                {name:"Also, CSK is the only team that has qualified for the playoffs in every season of the IPL (except for 2 years due to ban)"},
                {name:"Interestingly Chennai Super Kings also loses 4 times in IPL final, most by any team in IPL."},
                {name:"Sachin Tendulkar and Virat Kohli are the only two Indian players to have won the most valuable player award in the history of IPL."},
                {name:"Chennai Super Kings is the only team in IPL that has never changed its captain."},
                {name:" Amit Mishra holds the record of highest number of hat-tricks (3) in the history of IPL."},
                {name:"Dale Steyn holds the record of most number of dot balls in one IPL Season. In 17 matches, he bowled 212 dot balls out of a total of 407 balls in IPL 2013"},
                {name:"Virat Kohli holds the record of most runs in one IPL Season. He has made 973 runs in IPL 2016."},
                {name:"In every IPL Season, RCB promotes “Go Green” initiative by wearing green jersey for a match."},
                {name:"Ishant Sharma holds the record of conceding most runs in an innings. He conceded 66 runs in 4 overs against CSK in IPL 2013."},
                {name:"Sachin Tendulkar becomes the first Indian player to win an orange cap in IPL."},
                {name:"Chris Gayle and David Warner have won orange cap twice in the history of IPL."},
                {name:"Bhuvneshwar Kumar (SRH) is the only bowler to have won the purple cap twice in IPL history."},
                {name:"In 2015, Parthiv Patel becomes the first Indian player who plays for 6 IPL franchises."},
                {name:"Aaron Finch becomes the first overseas player who plays for 6 IPL franchises."},
                {name:"Kings XI Punjab is the only team that has changed its captain 11 times in 11 seasons of IPL."},
                {name:"Mumbai Indians holds the record biggest ever win in the history of the IPL. MI defeated DD (Delhi Daredevils) by a huge margin of 146 runs in IPL 2017."},
                {name:"RCB holds the record for the highest and the lowest total in IPL history"},
                {name:"Thank you for reading the facts. Which team are you supporting this IPL 2020 season?"},   
            ] 
        }
    }
}
</script>

<style scoped>
.container{
    width: 100%;
    height: 100%;
    margin: auto;
}
.content{
    border-left: 3px solid rgb(109, 206, 114);
    border-right: 2px solid rgb(109, 206, 114);;
    border-top: 1px solid rgb(247, 215, 157);
    border-bottom: 1px solid rgba(274, 215, 157);
    border-radius: 5px;
    padding: 8px;
    margin-bottom: 10px;
    margin-right: 5%;
    margin-left: 5%;
    margin-top: 10px;
    transition: 0.8s;
}
.content:hover{
    background-color: rgb(253, 141, 216);
}




</style>
