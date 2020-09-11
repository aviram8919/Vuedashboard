<template>
    <div class="container-app">
        <div class="container-quiz">
            <div class="quiz-header">
                <h1>Quick Quiz</h1>
            </div>
            <div class="step-progress" :style = "{'width': progress + '%'}"></div>


            <div class="quiz-main" v-for = "(element,index) in questions.slice(a,b)" :key = "index" v-show = "quiz">
                <div class="box-question">
                    <h2>Question {{b}}/{{questions.length}} </h2>
                    <p>{{element.question}}</p>
                </div>
                <div class="box-suggestion">
                    <ul>
                        <li v-for = "(item,index) in element.suggestions" :key = "index"  :class = "select ? check(item) : '' " @click = "selectResponse(item)">{{item.suggestion}}</li>
                    </ul>
                </div>
            </div>
            
            <div class="box-score" v-if = "score_show">
                <h2>Your Score is</h2>
                <h2>{{score}}/{{questions.length}}</h2>
                <div class="btn-restart">
                    <button @click = "restartQuiz">Restart</button>
                </div>

            </div>

            <div class="quiz-footer">
                <div class="box-button" v-if = "progress < 100">
                    <button @click = "skipQuestion" :style = "!next? 'background-color:rgba(100,128,202)' : '' ">Skip</button>
                    <button @click = "nextQuestion" :style = "next ? 'background-color:rgba(106,128,202)' : '' ">Next</button>
                </div>
            </div>


        </div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            questions:[
        {
            question:"When was IPL started?",
            suggestions:[
                {suggestion:'2008'},
                {suggestion:'2009'},
                {suggestion:'2007',correct:true},
                {suggestion:'2006'},

            ]
        },

        {
            question:"Which player has made highest numbers of runs in IPL history?",
            suggestions:[
                {suggestion:'Suresh Raina'},
                {suggestion:'Virat Kohli',correct:true},
                {suggestion:'Chris Gayle'},
                {suggestion:'Murli Vijay'},
            ]
        },

        {
            question:"Which player has taken most numbers of wickets in IPL so far?",
            suggestions:[
                {suggestion:'Lasith Malinga',correct:true},
                {suggestion:'Ravindra Jadega'},
                {suggestion:'Zaheer Khan'},
                {suggestion:'None Of the above'},
            ]
        },

        {
            question:"Which team has never won the IPL tournament?",
            suggestions:[
                {suggestion:'Chennai Super Kings'},
                {suggestion:'Rajasthan Royals'},
                {suggestion:'Royal Challeneger Banglore',correct:true},
                {suggestion:'Mumbai Indians'},
            ]
        },

        {
            question:"Maximum how many foreign players can play in the playing eleven of the IPL match?",
            suggestions:[
                {suggestion:'3'},
                {suggestion:'5'},
                {suggestion:'4', correct: true},
                {suggestion:'Not Fixed'},
            ]
        },

        {
            question:"Who is the costliest player in the IPL auction history?",
            suggestions:[
                {suggestion:'Ben Stokes'},
                {suggestion:'Gautam Gambhir'},
                {suggestion:'Yusuf Pathan'},
                {suggestion:'Yuraj Singh', correct: true},
            ]
        },

        {
            question:"In the history of IPL, Which of the following player got out at the zero (most ducks)?",
            suggestions:[
                {suggestion:'Harbhajan Singh', correct: true},
                {suggestion:'Ishant Sharma'},
                {suggestion:'L.Balaji'},
                {suggestion:'Bhuvneshwar Kumar'},
            ]
        },
        {
            question:"What will be the prize money for IPL 2017 tournament?",
            suggestions:[
                {suggestion:'11 crore'},
                {suggestion:'7.5 crore'},
                {suggestion:'20 crore', correct: true},
                {suggestion:'15 crore'},
            ]
        },

        {
            question:"Which player has taken most numbers of hat-tricks in the IPL so far?",
            suggestions:[
                {suggestion:'Yuraj Singh'},
                {suggestion:'Praveen Kumar'},
                {suggestion:'Amit Mishra', correct: true},
                {suggestion:'SHanhe Watson'},
            ]
        },

        {
            question:"Which team has won highest numbers of IPL matches so far?",
            suggestions:[
                {suggestion:'Sunrises Hyderabad'},
                {suggestion:'Chennai Super Kings'},
                {suggestion:'Mumbai Indians', correct: true},
                {suggestion:'Kolkata Knight Riders'},
            ]
        },
        
        ],
        a:0,
        b:1,
        select:false,
        score:0,
        quiz:true,
        score_show:false,
        next:false,
        progress:0
    }
   
    },
    methods:{
        selectResponse(e){

            this.select = true;
            this.next = true;

            if(e.correct){
                this.score++;
            }

        },

        check(status){
            if(status.correct){
                return 'correct'
            }else{
                return 'incorrect'
            }
        },
        nextQuestion(){

            if(!this.next){
                return;
            }

            this.progress = this.progress + (100/this.questions.length);

            if(this.questions.length - 1 == this.a){
                this.score_show = true;
                this.quiz = false;
            }else{
                this.a++;
                this.b++;
                this.select = false;
                this.next = false;

            }


            
        },

        skipQuestion(){
            if(this.next){
                return;
            }

            this.progress = this.progress + (100/this.questions.length);



            if(this.questions.length - 1 == this.a){
                this.score_show = true;
                this.quiz = false;
            }else{
                this.a++;
                this.b++;
            }
        },
        restartQuiz(){
            Object.assign(this.$data, this.$options.data()); //reset data
        }

    }
}
</script>

<style scoped>
.container-app{
    display: flex;
    width: 500px;
    height: 600px;
    justify-content: center;
    margin: auto;
}

.container-quiz{

    display: flex;
    width: 35%;
    height: 80%;
    position: absolute;
    flex-flow: column;
    text-align: center;
    border: 1px solid #e7eae0;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px, 6px rgba(00,0,0.23);
}

.quiz-header{
    display: flex;
    width: 100%;
    height: 20%;
    border-bottom: 1px solid #e7eae0;
    justify-content: center;
    align-items: center;
    background-color: #e7eae0;
    border-radius: 10px 10px 0px 0px;
}

.quiz-main{
    display: flex;
    width: 100%;
    height: 70%;
    flex-flow: column;
    margin: auto;
}

.quiz-footer{
    display: flex;
    width: 100%;
    height: 10%;
    justify-content: center;
    border-top: 1px solid #e7eae0;
    background-color: #e7eae0;
    border-radius: 0px 0px 10px 10px;
}

.box-question{
    margin-top: 20px;
}

.box-question p{
    margin-top: 2px;
}

.box-suggestion{
    display: flex;
    width: 100%;
    justify-content: center;
    margin: auto;
}

ul{
    display: flex;
    width: 80%;
    margin: 0;
    padding: 0;
    flex-flow: column;
}

ul li{
    list-style: none;
    line-height: 2;
    margin-bottom: 20px;
    border-radius: 15px;
    border: 1px solid #cdd2d2;
    cursor: pointer;
    transition: 0.5s;
}

li:hover{
    background-color: #e7eae0;
}

.box-button{
    display: flex;
    width: 100%;
}

.box-button button{
    width: 150px;
    height: 35px;
    outline: none;
    border: 0;
    color: white;
    font-size: 10px;
    cursor: pointer;
    border-radius: 15px;
    margin: auto;
    background-color: #a09f9ff5;
}
li.correct{
    border:1px solid rgba(240,117,100);
    background-color:rgba(74,219,74);
    color: white;
    font-weight: 600;
}
li.incorrect{
    border:1px solid rgba(240,117,100);
    background-color:rgba(240,177,100);
    color: white;
    font-weight: 600;
}

.btn-score{
    display: flex;
    width: 100%;
    height: 70%;
    flex-flow: column;
}
.box-score{
    margin-top: 4px;
}
.btn-restart{
    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
    margin-top: 50px;
}
.btn-restart button{
    width: 150px;
    height: 35px;
    outline: none;
    border: 0;
    color: white;
    font-size: 10px;
    cursor: pointer;
    border-radius: 15px;
    margin: auto;
    background-color:rgba(106,128,202);

}
.step-progress{
    display: flex;
    width: 100%;
    height: 5px;
    background-color: rgba(106,128,202);
    transition: 0.5s;
}
</style>