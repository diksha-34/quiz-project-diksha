
   const quizData = [
    {
    question: "In HTML,color can be specified using HSL value,which means?" ,
    a: "Hue,Saturation,Light",
    b: "High,Static,Low",
    c: "High,Stable,Low",
    d: "HTML,Semantics,Language",
    correct:"d"
    },

    {
        question: " A tag used is an alternative to make text bold is?",
        a: "<Bold>",
        b:"<Double>",
        c:"<Strong>",
        d: "<Dark>",
        correct:"c"

    },



    {
        question: "In HTML form, form element are different type ?",
        a: "Input elements",
        b:"Textfields",
        c:"Submit buttons",
        d: "All of the Above",
        correct:"d"

    },

    {
        question: " A tag known to be fundamental HTML block is?",
        a: "<!DOCTYPE>",
        b:"<HTML>",
        c:"<BODY>",
        d: "<P>",
        correct:"b"

    },

    

    {
        question: " Defining a special style for special table,the added attribute should be?",
        a: "<class>",
        b:"<padding>",
        c:"<id>",
        d: "<tr>",
        correct:"c"

    },

    {
        question: " In HTML,the?element <HTML> defines the",
        a: "Element only",
        b:"Function only",
        c:"Whole Document",
        d: "Content",
        correct:"c"

    },

    {
        question: " The elemnt <em> in HTML defines",
        a: "Exponent mode text",
        b:"Empirical text",
        c:"Strong text",
        d: "Emphasized text",
       correct:"d"

    },

    {
        question: "The numbers of attribute required for <div> element is /are of",
        a: "0",
        b:"1",
        c:"2",
        d: "3",
        correct:"a"

    },

    {
        question: "To convert variables to number,method offered by javascript are of",
        a: "2 types",
        b:"3 types",
        c:"4 types",
        d: "5 types",
        correct:"b"

    },

    {
        question: " A client side script is defined by the tag",
        a: "<clientscript",
        b:"<script>",
        c:"<jcscript>",
        d: "<javascript>",
        correct:"b"

    }


    ];


     let index = 0;
    let correct = 0,
        incorrect = 0,
        total = quizData.length;
    let questionBox = document.getElementById("questionBox");
    let allInputs = document.querySelectorAll("input[type='radio']")
    const loadQuestion = () => {
        if (total === index) {
            return quizEnd()
        }
        reset()
        const data = quizData[index]
        questionBox.innerHTML = `${index + 1}) ${data.question}`
        allInputs[0].nextElementSibling.innerText = data.a
        allInputs[1].nextElementSibling.innerText = data.b
        allInputs[2].nextElementSibling.innerText = data.c
        allInputs[3].nextElementSibling.innerText = data.d
    }
    
    document.querySelector("#submit").addEventListener(
        "click",
        function() {
            const data = quizData[index]
            const ans = getAnswer()
            if (ans === data.correct) {
                correct++;
            } else {
                incorrect++;
            }
            index++;
            loadQuestion()
        }
    )
    
    const getAnswer = () => {
        let ans;
        allInputs.forEach(
            (inputEl) => {
                if (inputEl.checked) {
                    ans = inputEl.value;
                }
            }
        )
        return ans;
    }
    
    const reset = () => {
        allInputs.forEach(
            (inputEl) => {
                inputEl.checked = false;
            }
        )
    }
    
    const quizEnd = () => {
        ;// console.log(document.getElementsByClassName("container")
        document.getElementsByClassName("container")[0].innerHTML = `
            <div class="col">
                <h3 class="w-100"> Thankyou for playing the quiz, you've scored ${correct} / ${total} </h3>
            </div>
        `
    }
    loadQuestion(index);
















    