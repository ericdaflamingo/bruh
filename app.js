const therapyButton = document.querySelector("#therapyButton")
const cognitiveButton = document.querySelector("#cognitiveButton")
const interpersonalButton = document.querySelector("#interpersonalButton")
const familyButton = document.querySelector("#familyButton")
const expectButton = document.querySelector("#expectButton")
const therapyHelp = document.querySelector("#therapyHelp")
const cardBody = document.querySelector(".card-body")
buttons = [cognitiveButton, interpersonalButton, familyButton, expectButton, therapyButton]
const selectedChange = function (buttonSelected) {
  for (let button of buttons) {
    button.classList.remove("selected")
  }
  buttonSelected.classList.toggle("selected")
}
therapyButton.addEventListener("click", function () {
  selectedChange(therapyButton)
  cardBody.innerHTML =
    `        <div class="card-body">
  <h5 class="card-title">Different types of therapy</h5>
  <p class="card-text">People with mental health conditions often find talk therapy (psychotherapy) very
    helpful.
    There are many different types of therapy such as:
  <ul>
    <li>Cognitive-Behavioral Therapy</li>
    <li>Interpersonal Therapy </li>
    <li>Family therapy </li>
    <li>Psychodynamic Therapy</li>
  </ul>
  <img src="https://us.123rf.com/450wm/ssstocker/ssstocker1811/ssstocker181100089/112368413-stock-illustration-psychotherapy-treatment-doctor-and-patient-sitting-and-talking-vector-concept-illustration.jpg?ver=6">
  </p>
</div>`
})
cognitiveButton.addEventListener("click", function () {
  selectedChange(cognitiveButton)
  cardBody.innerHTML =
    `        <div class="card-body">
    <h5 class="card-title">Cognitive-Behavioral Therapy</h5>
    <p class="card-text">
      Therapy with two sides to it. The cognitive side works to develop helpful beliefs about your life. The
      behavioral side helps you take healthier actions. This therapy often works well with depression, anxiety,
      and bipolar disorder.
    </p>
    <img src="https://creakyjoints.org/wp-content/uploads/2020/02/0120_CBT_Logo-1024x683.jpg" alt="">
  </div>
`
})
interpersonalButton.addEventListener("click", function () {
  selectedChange(interpersonalButton)
  cardBody.innerHTML =
    `        <div class="card-body">
    <h5 class="card-title">Interpersonal Therapy</h5>
    <p class="card-text">This focuses on improving relationships and helping a person express their emotions in healthy ways. This often works well with depression.
    </p>
    <img src="https://www.therapytribe.com/wp-content/uploads/2014/02/Interpersonal-Therapy.png">
  </div>`
})
familyButton.addEventListener("click", function () {
  selectedChange(familyButton)
  cardBody.innerHTML =
    `
  
  <div class="card-body">
  <h5 class="card-title">Family therapy </h5>
  <p class="card-text">This helps family members communicate and solve problems together better.
    This is often used for treating eating disorders and bipolar disorder

  </p>
  <img src="https://www.mcnielfamilycounseling.com/images/familycounseling.jpg">
</div>`
  expectButton.addEventListener("click", function () {
    selectedChange(expectButton)
    cardBody.innerHTML =
      `
      <div class="card-body">
      <h5 class="card-title">What should you expect from therapy?</h5>
      <p class="card-text">Depending on you, therapy can be short or long term. People often visit their therapists
        at least once a week for ~50 minutes. Your first visit will be different from future visits, this the
        “getting to know you and the situation” phase that will help your therapist get an idea of how to proceed
        with the treatment.

        During therapy, you should always feel safe and respected. If you’re with a group, you should be addressing
        your needs, goals, concerns, and desires.

        Think about what would make you feel more comfortable with a therapist.
        Would you prefer to see
      <ul>
        <li>A male or female</li>
        <li>Someone older or younger</li>
        <li>Someone from your cultural background</li>
        <li>Someone with a modern or friendly fashion</li>
      </ul>

      </p>
      <img src="https://stephentaylorpsychotherapy.co.uk/wp-content/uploads/2016/06/Maya-Jabobs-Psychotherapist-North-London.png">
    </div>
    `
  })
})
const quotes = [
  "Change behaviors that hold you back",
  "Develop healthier thinking methods",
  "Heal pains from the past",
  "Figure out your goals",
  "Strengthen your self-confidence",
  "Understand your mental health condition",
  "Define and reach wellness goals",
  "Overcome fears and insecurities",
  "Cope with stress",
  "Make sense of past traumatic experiences",
  "Identify triggers",
  "Find your true personality from the moods cause by your condition"

]
const changeQuotes = (quote) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      therapyHelp.classList.remove("invis")
      therapyHelp.innerText = quote
      resolve()
    }, 2200)

  })

}
const quoteCaller = async () => {
  for (let quote of quotes) {
    setTimeout(() => {
      therapyHelp.classList.add("invis")
    }, 1700)
    await changeQuotes(quote)

  }
}
quoteCaller()
