// ts에서 DOM 객체에 대한 타입을 지정하는법?
// !를 붙이면 null이 아님을 보장해준다.
// null이 아님을 보장해주지 않으면 input.value를 사용할 수 없다.
const btn = document.getElementById("btn")!;

// const input = document.getElementById("todoinput")!;

// ts 타입은 그냥 HTMLElement (input 인지 btn 인지 그런거 모름)
const input = document.getElementById("todoinput") as HTMLInputElement;

const form = document.querySelector("form")!;

//이렇게 할수도 있지만... 함수를 분리한다면?
// form.addEventListener("submit", (e) => {
//   //우리가 그냥 막쓰던 e 는 사실 submitEvent였다...
//   e.preventDefault();
//   console.log("submit");
// });

const handleSubmit = (e: SubmitEvent) => {
  e.preventDefault();
  console.log("submit");
};

form.addEventListener("submit", handleSubmit);

//DOM에 내장되어있는 타입을 확인할 수 있다.
// 기본적으로 TS는 DOM의 모든 타입 정의를 자동으로 인지함.

btn?.addEventListener("click", () => {
  input.value;
});
