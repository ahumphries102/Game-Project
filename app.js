//playerScore is dipslayed at the end of the of the game how many
//answers the player guessed correctly
let playerScore = 0


//***********************************************************************************
//***********************************************************************************
//questAns are the objects in the game that are used to populate
//the DOM
let questAns = [
    {
        //Context, question and answers are used throughout the entire game to populate the DOM
        context: "<p>S</p>",
        question: "What are fonts with tails on either ends called?",

        //answers is an array filled with text in the DOM and one of them is the answer
        answers: [{
                answer: "Serif Font",
                correctAns: Boolean = true,
                }, {
                answer: "Sans Serif Font",
                correctAns: Boolean = false,
            }, {
                answer: "Decorative Font",
                correctAns: Boolean = false,
        },
            {
                answer: "Display Font",
                correctAns: Boolean = false,
    		},
    	],

    },
    {
        context: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur ala depor fonuseuy</p>",
        question: "What alignment is this called?",
        answers: [{
                answer: "Justified Font",
                correctAns: Boolean = true,
                }, {
                answer: "Right aligned Font",
                correctAns: Boolean = false,
            }, {
                answer: "Left aligned Font",
                correctAns: Boolean = false,
        },
            {
                answer: "Shark aligned Font",
                correctAns: Boolean = false,
    		},
    	],

    },
    {
        context: "<p>In 2688, humanity has built a utopia thanks to the music of Wyld Stallyns. The supreme beings of this world instruct Rufus (Carlin) to travel back in time by a time machine disguised as a phone booth to give aid to Bill and Ted to ensure they pass their class. Rufus lands by the two as they work on their report near a Circle K. As he introduces himself, a second phone booth lands nearby and future versions of Bill and Ted come out, proving their identity to their younger selves and telling them to trust Rufus<br><br>before they leave. Rufus offers to show the teens how the machine works, taking them to Austria in 1805 where Napoleon Bonaparte is commanding the French army. Assured the machine works, Rufus, Bill and Ted return to the present, though Napoleon, knocked back by an explosion, is caught in the phone booth's wake and dragged with them. Back at Ted's house, Rufus provides the teens additional instructions and then leaves. The two find Napoleon nearby, and come upon an idea of taking historical figures from the past to bring them to the present to complete their report. They leave Napoleon with Ted's younger brother Deacon and set out.</p>",
        question: "How could we make this paragraph more legible?",
        answers: [{
                answer: "Use a body font",
                correctAns: Boolean = true,
                }, {
                answer: "Increase the size of the font",
                correctAns: Boolean = false,
            }, {
                answer: "Adjust the alignment",
                correctAns: Boolean = false,
            },
            {
                answer: "Change the color of the font",
                correctAns: Boolean = false,
    		},
    	],

    },
    {
        context: "<p>There's giant bumblebees that keep stealing my milk. On Monday I bought some and later that day they it went missing. On Tuesday I went to get a glug of the good stuff and it was missing and the only other living organism that could move were the bumblebees. So when I put 2 and 2 together I learned that my milk was being stolen by them</p>",
        question: "How could we fix our paragraph to be more legible?",
        answers: [{
                answer: "Adjust the tracking",
                correctAns: Boolean = true,
                }, {
                answer: "Adjust line height",
                correctAns: Boolean = false,
            }, {
                answer: "Change the font-family",
                correctAns: Boolean = false,
            },
            {
                answer: "Increase the font size",
                correctAns: Boolean = false,
    		},
    	],

    }, {
        context: "<p>Giant Whales Fire at the Sky</p>",
        question: "Where would you most likely use this style of font?",
        answers: [{
                answer: "A wedding invitation",
                correctAns: Boolean = true,
                }, {
                answer: "Your resume",
                correctAns: Boolean = false,
            }, {
                answer: "For a novel you wrote",
                correctAns: Boolean = false,
            },
            {
                answer: "On highway billboard",
                correctAns: Boolean = false,
    		},
    	],

    }, {
        context: updateScore = function () {
            return `<p>You scored ${playerScore}</p>`
        },
        question: "Thanks for playing"
    }
]


//***********************************************************************************
//***********************************************************************************
//nextB is a button on the DOM and this variable was created since
//the button is called so often
let $nextB = $(".nextB")


//***********************************************************************************
//***********************************************************************************
//arrVal is essentially the level the player is on
let arrVal = 0


//***********************************************************************************
//***********************************************************************************
//hidden is a boolean used to hide the next button and
//question text when the levels transition
let hidden = false


//***********************************************************************************
//***********************************************************************************
//questAns is called so often it was simply easier to make a 
//a smaller text to call.
let quest = questAns[arrVal]


//***********************************************************************************
//***********************************************************************************
//Fills the answers with answers from our questAns array
let populateAns = function () {
    //This variable shuffles the questAns arrays questions
    let shuffAns = quest.answers.sort(function (a, b) {
        //This number will either be positive or negative
        //If it's positive than the array will display 
        //..TBD **************************************
        return 0.5 - Math.random()
    })

    for (let i = 0; i < quest.answers.length; i++) {
        //This forloop appends the items from the questAns answers array into the dom.
        if ($(".ansA").text() === " ") {
            $(".ansA").append(quest.answers[i].answer)
        } else if ($(".ansB").text() === " ") {
            $(".ansB").append(quest.answers[i].answer)
        } else if ($(".ansC").text() === " ") {
            $(".ansC").append(quest.answers[i].answer)
        } else {
            $(".ansD").append(quest.answers[i].answer)
        }
    }

}


//***********************************************************************************
//***********************************************************************************
//Clear the context area of the DOM
let context = function () {
    //Clear out the context box and append a new context
    $(".contextBox").text(" ").append(quest.context)
}


//***********************************************************************************
//***********************************************************************************
//Move to the next level of the game and populate its 
//game state. Is only called when $nextB is clicked
let cssAdjust = function () {
    if (arrVal === 0) {
        $(".contextBox p").css({
            "font-size": "32em"
        })
    } else if (arrVal === 1) {
        $(".contextBox p").css({
            "text-align": "justify",
        })

    } else if (arrVal === 2) {
        $(".contextBox p").css({
            "font-family": "Ani",
            "padding": "10%"
        })
    } else if (arrVal === 3) {
        $(".contextBox p").css({
            "font-family": "",
            "letter-spacing": ".9em",
        })
    } else if (arrVal === 4) {
        $(".contextBox p").css({
            "text-align": "left",
            "font-family": "Great Vibes",
            "font-size": "5em"
        })
    } else {
        $(".contextBox p").css({
            "text-align": "right",
            "font-family": "Rokkit",
            "font-size": "5em"
        })
    }
}


//***********************************************************************************
//***********************************************************************************
//moves us to the next level once the next button is clicked
//It cleans everything up on the previous level.
let questUpdate = function () {
    arrVal += 1
    answersCleanUp()
    quest = questAns[arrVal]
    context()
    cssAdjust()
    //If we are on the level before the last one do not populate answers
    if (arrVal <= 4) {
        populateAns()
    }
    populateQuestion()
}


//***********************************************************************************
//***********************************************************************************
//Created to hide the current question
let populateQuestion = function () {
    //chain method that clears the question box in the DOM and appends a question from the quest object
    $(".questionText").text(" ").append(quest.question)
}


//***********************************************************************************
//***********************************************************************************
//When next is clicked, if the hidden is false the answers will be hidden
//and the hidden bool will be true. If it is true the next button will be hidden
//and the answers will be repopulated with new answers.
let answersCleanUp = function () {
    if (arrVal <= 4) {
        if (hidden === false) {
            $nextB.show()
            $(".answers p, .answers h2").not(".nextB").hide()
            //Turn the answer text areas in the DOM into empty strings.
            //This is done so when the new answers populate the text areas they are
            //Cluttered with the answers from the previous element of the questAns Array
            $(".answers p span").not(".nextB").text(" ")
            hidden = true
        } else {
            $nextB.hide()
            //If arrVal is higher than 4 clear the h3 in the DOM
            $(".answers h3").text(" ")
            $(".answers p, h2").not(".nextB").show()
            hidden = false
        }
    }
}


//***********************************************************************************
//***********************************************************************************
//endGame sets the arrVal to -1 because when questUpdate is called it increments 
//arrVal and we want our game to start at arrVal 0.
let endGame = function () {
    arrVal = -1
    playerScore = 0
    $("h3").text(" ")
    $nextB.text("Next Question")
    questUpdate()
}


//***********************************************************************************
//***********************************************************************************
//Buttons are established so players can click them and on click they will look in the quest answers array
//for answers boolean. If the one clicked is set to true the player earns a point and if false they earn no points
//If however the arrVal is 4 or higher the game will go to the end screen.
let findAnswer = function () {
    //loop through the question answers array
    for (let i = 0; i < quest.answers.length; i++) {
        //We are setting up a click function for each question in the DOM with the id of
        //0, 1, 2, 3
        $(`#${i}`).click(function () {
            if (arrVal <= 3) {
                //If the button we click on has a true bool, earn a point
                if (quest.answers[i].correctAns) {
                    playerScore += 1
                    answersCleanUp()
                    $("h3").text("Correct Answer!").css("color", "green")
                }
                //else do not earn a point
                else {
                    $("h3").text("Incorrect! Try Google for help.").css("color", "red")
                    answersCleanUp()

                }
            }
            //If the arrVal 4 or more than when any button is clicked, the game goes to the end screen
            else {
                if (quest.answers[i].correctAns) {
                    playerScore += 1
                }
                updateScore()
                answersCleanUp()
                questUpdate()
                $nextB.text("Play Again?")
            }
        })
    }
}


//***********************************************************************************
//***********************************************************************************
//Initates the game by setting the button logic, populating the answers
//the context and question.
let gameBegin = function () {
    findAnswer()
    populateAns()
    context()
    cssAdjust()
    //move on to the next element in the question array and
    //ask a new question and receive new answers
    populateQuestion()
}


//***********************************************************************************
//***********************************************************************************
//When clicked go to the next level, but if arrVal is greater than 3 end the game
$nextB.click(function () {
    //Only move to next level if you are not on the last level
    if (arrVal <= 3) {
        questUpdate()
    } else {
        endGame()
    }
})


//***********************************************************************************
//***********************************************************************************
//When the start button is clicked the game begins
$(".startScreen Button").click(function () {
    $(".startScreen").addClass("startScreenAni")
    gameBegin()
})
