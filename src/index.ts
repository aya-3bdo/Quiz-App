
const question = document.querySelector('.quizContainer__question') as HTMLDivElement;
const answers = document.querySelector('.quizContainer__answers') as HTMLDivElement ;
let nextBtn = document.querySelector('.quizContainer__buttons__next') as HTMLButtonElement;
let previousBtn = document.querySelector('.quizContainer__buttons__previous') as HTMLButtonElement;




type Answer= {
  ans: string;
  status: 'correct' | 'false'; 
}

type QuizQuestion ={
  question: string;
  answers: Answer[];
}



let questionsArr: QuizQuestion[] = [
	{
		question: "What's the capital of Germany?",
		answers: [
			{ ans: "A) Berlin", status: 'correct' },
			{ ans: "B) California", status: 'false' },
			{ ans: "C) Tokyo", status: 'false' },
			{ ans: "D) Belguim", status: 'false' },
			
		]
	},

	{
		question: "What's the capital of USA?",
		answers: [
			{ ans: "A) Philly", status: 'false' },
			{ ans: "B) Cairo", status: 'false' },
			{ ans: "C) Washington", status: 'correct' },
			{ ans: "D) Oslo", status: 'false' },
			
		]
	},

	{
		question: "When was WWW I happened?",
		answers: [
			{ ans: "A) 1949", status: 'false' },
			{ ans: "B) 1914", status: 'correct' },
			{ ans: "C) 2001", status: 'false' },
			{ ans: "D) 1967", status: 'false' },
			
		]
	},
	{
		question: "What's the capital of France?",
		answers: [
			{ ans: "A) Canberra", status: 'false' },
			{ ans: "B) Vienna", status: 'false' },
			{ ans: "C) Minsk", status: 'false' },
			{ ans: "D) Paris", status: 'correct' },
			
		]
	},
];


let quesIndx: number = 0

showQuestion()

function showQuestion(): void {
	(question.firstElementChild as HTMLElement).innerText = questionsArr[quesIndx].question;
	for (let answ of questionsArr[quesIndx].answers) {
			
		answers.innerHTML +=
			`<div class= 'answer ${answ.status}' > ${answ.ans}<div>`
	};

	// Check the Answer's background color.
	for (const div of Array.from(answers.children))
		(div as HTMLDivElement).addEventListener('click', () => {
			for (const div of Array.from(answers.children))
				
				if ((div as HTMLDivElement).classList.contains('correct')) {
					(div as HTMLDivElement).style.background = 'rgb(54, 187, 194)';
				} else {
					setTimeout(() => {
						(div as HTMLDivElement).style.background = 'rgb(207, 111, 111)';
					}, 200)
						
				}

			}
		
			)
}




nextBtn.addEventListener('click', () => {
	(question.firstElementChild as HTMLElement).innerText = ``;
	answers.innerHTML = ``;
	quesIndx == 3? quesIndx = 3 : quesIndx ++
   showQuestion()
	
})


previousBtn.addEventListener('click', () => {
	(question.firstElementChild as HTMLElement).innerText = ``;
	answers.innerHTML = ``;
	quesIndx == 0 ? quesIndx = 0 : quesIndx--
	showQuestion()
	
});

