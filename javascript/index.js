// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction(
      "mashedPotatoes",
      1,
      (step2) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step2}</li>`;
        getInstruction(
          "mashedPotatoes",
          2,
          (step3) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step3}</li>`;
            getInstruction(
              "mashedPotatoes",
              3,
              (step4) => {
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li>${step4}</li>`;
                getInstruction(
                  "mashedPotatoes",
                  4,
                  (step5) => {
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>${step5}</li>`;

                    document
                      .querySelector("#mashedPotatoesImg") //Mashed potatoes are ready!
                      .removeAttribute("hidden");
                  },
                  (error) => console.log(error)
                );
              },
              (error) => console.log(error)
            );
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
  },
  (error) => console.log(error)
);

// Iteration 1 - using callbacks
// ...

// Iteration 2 - using promises
obtainInstruction("steak", 0)
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction("steak", 0);
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction("steak", 1);
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction("steak", 2);
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction("steak", 3);
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction("steak", 4);
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction("steak", 5);
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
    return obtainInstruction("steak", 6);
  })
  .then((step8) => {
    document.querySelector("#steak").innerHTML += `<li>${step8}</li>`;
    return obtainInstruction("steak", 7);
  })
  .catch((err) => console.log(err));

// Iteration 3 using async/await

async function doTheBroccoli() {
  try {
    const response1 = await obtainInstruction("broccoli", 0);
    const response2 = await obtainInstruction("broccoli", 1);
    const response3 = await obtainInstruction("broccoli", 2);
    const response4 = await obtainInstruction("broccoli", 3);
    const response5 = await obtainInstruction("broccoli", 4);
    const response6 = await obtainInstruction("broccoli", 5);
    const response7 = await obtainInstruction("broccoli", 6);
    document.querySelector("#steak").innerHTML += `<li>${response1}</li>`;
    document.querySelector("#steak").innerHTML += `<li>${response2}</li>`;
    document.querySelector("#steak").innerHTML += `<li>${response3}</li>`;
    document.querySelector("#steak").innerHTML += `<li>${response4}</li>`;
    document.querySelector("#steak").innerHTML += `<li>${response5}</li>`;
    document.querySelector("#steak").innerHTML += `<li>${response6}</li>`;
    document.querySelector("#steak").innerHTML += `<li>${response7}</li>`;
  } catch (error) {
    console.log("error!");
  }
}
doTheBroccoli()
// Bonus 2 - Promise all
// ...
