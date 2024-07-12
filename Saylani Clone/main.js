    let typo = document.getElementById("text_js");
    let nav_li =document.getElementById("overseas_li");
    let line_type = ["healthcare and lot", "IT and vocational trainings,", "education","Monthly family support","assistance to disaster affectees"];
    let current_index = 0;
    let current_element = 0;
    let direction = 1; // 1: Typing forward, -1: Going back

    
    let color = 0;
    setInterval(() => {
        if (color === 0) {
            nav_li.style.color = "blue";
            color = 1;
        } else {
            nav_li.style.color = "green"; // You can set the color to any other value here
            color = 0;
        }
    }, 500);

    setInterval(() => {
        typo.innerHTML = line_type[current_index].substring(0, current_element);

        if (direction === 1) {
            if (current_element < line_type[current_index].length) {
                ++current_element;
            } else {
                direction = -1;
            }
        } else if (direction === -1) {
            if (current_element > 0) {
                --current_element;
            } else {
                direction = 1;
                current_index = (current_index + 1) % line_type.length;
                console.log(current_index);
            }
        }
    }, 100);

let d1 = document.getElementById("digit0");
let d1_value = 300001;
let n = 0;

let s2 = setInterval(() => {
    d1.innerText = n;
    n += 500;
    
    if (n >= d1_value) {
        clearInterval(s2); // Clear the interval when n reaches or exceeds d1_value
    }
}, 0);
let d2 = document.getElementById("digit1");
let d2_value = 20001;
let n2 = 0;

let s3 = setInterval(() => {
    d2.innerText = n2;
    n2 += 50;
    if (n2 >= d2_value) {
        clearInterval(s3); // Clear the interval when n2 reaches or exceeds d2_value
    }
}, 0);



let d3 = document.getElementById("digit2");
let d3_value = 25001;
let n3 = 0;

let s4 = setInterval(() => {
    d3.innerText = n3;
    n3 += 50;
    if (n3 >= d3_value) {
        clearInterval(s4); // Clear the interval when n2 reaches or exceeds d2_value
    }
}, 0);


let d4 = document.getElementById("digit3");
let d4_value = 125001;
let n4 = 0;

let s5 = setInterval(() => {
    d4.innerText = n4;
    n4 += 250;
    if (n4 >= d4_value) {
        clearInterval(s5); // Clear the interval when n2 reaches or exceeds d2_value
    }
}, 0);

let person_img = document.getElementById("persons");
let p_name = document.getElementById("personname");
let p_post = document.getElementById("personpost");
let p_saying = document.getElementById("personsaying");
let btn1 = document.getElementById("btn");
let turn = 0;

btn1.addEventListener("click", () =>{
    onclick();
});

function onclick() {
    if (turn == 0) {
        person_img.innerHTML = `<img src="./img/person1.jpg">`;
        p_name.innerText = "Arshad Wali Muhammad";
        p_post.innerText = "(Group Director, Gerry’s Group)";
        p_saying.innerHTML = `Saylani Welfare Trust is a name that needs no introduction today. 
        The journey this team embarked upon was made possible owing to their zeal, 
        enthusiasm & commitment to the society and by the grace of Allah (SWT), it 
        has become a name that we need and not just the one we want. I wish Saylani’s 
        team all the success and blessing that they deserve for future, May God bless 
        Saylani and ensure prosperity and happiness for our people, Ameen!`;
        turn = 1;
        
    }
     else {
        person_img.innerHTML = `<img src="./img/person2.jpg">`;
        p_name.innerText = "Asif Ismail";
        p_post.innerText = "(C.O.O. & Director, Premier Cables Pvt. Ltd)";
        p_saying.innerHTML = `When we talk about serving humanity, no second thought 
        occurs other than Saylani Welfare Trust. Saylani is doing a tremendous job 
        in terms of everything they do for a troubled humanity. From offering food 
        to the hungry to arranging jobs for jobless people, arranging marriages and
         dowry for orphaned girls, offering free medical facilities, and much more.
          We sincerely wish them success in their future endeavors and in raising their 
          standards of serving mankind in a better and more professional way.`;
        turn = 0;
    }
}

let playerIframe = document.querySelector('iframe');
playerIframe.style.backgroundColor = 'blue';



