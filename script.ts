function loadEvent() {
	class Hecmathlon{
		constructor(input) {
			this.input = input
		}
        getMaxValue () {
            let maxValue = 0
            let inputArr = this.input.split(",")
            return (maxValue = inputArr.reduce(function (a:number,b:number){ return Math.max(a,b)}))
                     
		}

        getGreaterThan (){
			let greaterValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
			let greaterNums = greaterValues.filter( k => this.input < greaterValues[k-1])
     		return greaterNums
		}

       
        
    fizzBuzz () {
      return Array(parseInt(this.input)).fill().map((_,i) => i+1).map(num =>num%5=== 0 && num%3===0? "FizzBuzz": num%5 ===0? "Buzz": num%3===0?"Fizz": num)
			
					}
	}

	let maxValueBtn = document.querySelector(".maxValue__btn");
	let greaterThanBtn = document.querySelector(".greaterThan__btn");
	let fizzBuzzBtn = document.querySelector(".fizzBuzz__btn");

	let maxValueInput = document.querySelector(".maxValue__input");
	let greaterThanInput = document.querySelector(".greaterThan__input");
	let fizzBuzzInput = document.querySelector(".fizzBuzz__input");

	let maxValueRoot = document.querySelector(".maxValue__container");
	let greaterThanRoot = document.querySelector(".greaterThan__container");
	let fizzBuzzRoot = document.querySelector(".fizzBuzz__container");

	maxValueBtn!.addEventListener("click", () => {
		let hECMAthlon = new Hecmathlon(maxValueInput.value)
		let maxValue = getOutput(hECMAthlon.getMaxValue())
		logResult(maxValueRoot, maxValue)
	})
	greaterThanBtn!.addEventListener("click", () => {
		let hECMAthlon = new Hecmathlon(greaterThanInput.value)
		let greaterValues = getOutput(hECMAthlon.getGreaterThan())
		logResult(greaterThanRoot, greaterValues)
	})
	fizzBuzzBtn!.addEventListener("click", () => {
		let hECMAthlon = new Hecmathlon(fizzBuzzInput.value)
		let resultWord = getOutput(hECMAthlon.fizzBuzz())
		logResult(fizzBuzzRoot, resultWord)
   	})

	function getOutput<type>(output:type) {
		let returnValue = [...["The function starts"], output, ["The function end"]]
			return returnValue
	}

	function logResult(place, values) {
		/*while (place.firstChild) {
			place.firstChild.remove();
		} */
		for (let j = 0; j < values.length; j++) {
			place.insertAdjacentHTML("beforeend", "<div>" + values[j] + "</div>");
		}
	}
}
window.addEventListener("load", loadEvent);