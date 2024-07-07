
//this is home.js in another folder

import { card } from './data.js'


let len = 0;
let location_event = document.getElementById('location-event');
card.forEach((el) => {
    len++;
    console.log(len)

    if (len < 4) {
        let newItem = document.createElement('div');
        newItem.classList.add("card", "card-w")
        newItem.innerHTML = `
    <img src="${el.url}" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">${el.para}</p>
      <p>${el.venue}</p>
    
    </div>
 
    `
        location_event.appendChild(newItem)
    } else {
        console.log("filling")
    }
})



document.getElementById('see-btn1').addEventListener('click', function () {
    // document.getElementById('nomore').style.display = 'block';
    // document.getElementById('see-btn2').style.display = 'block'
    // document.getElementById('see-btn1').style.display = 'none';
    location_event.innerHTML = ""

    card.forEach((el) => {



        let newItem = document.createElement('div');
        newItem.classList.add("card", "card-w")
        newItem.innerHTML = `
        <img src="${el.url}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">${el.para}</p>
          <p>${el.venue}</p>
        </div>
     
        `
        location_event.appendChild(newItem)


    })
    document.getElementById('see-btn2').style.display = 'block'
    document.getElementById('see-btn1').style.display = 'none';
})

document.getElementById('see-btn2').addEventListener('click', function () {

    location_event.innerHTML = "";
    len = 0;

    card.forEach((el) => {
        len++;


        if (len < 4) {
            let newItem = document.createElement('div');
            newItem.classList.add("card", "card-w")
            newItem.innerHTML = `
    <img src="${el.url}" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">${el.para}</p>
      <p>${el.venue}</p>
     
    </div>
 
    `
            location_event.appendChild(newItem)
        } else {
            console.log("filling")
        }
    })


    document.getElementById('see-btn1').style.display = 'block';
    document.getElementById('see-btn2').style.display = 'none';

})


document.getElementById('see-btn3').addEventListener('click', function () {
    document.getElementById('nomore2').style.display = 'block';
    document.getElementById('see-btn4').style.display = 'block'
    document.getElementById('see-btn3').style.display = 'none';
})

document.getElementById('see-btn4').addEventListener('click', function () {
    document.getElementById('nomore2').style.display = 'none';
    document.getElementById('see-btn3').style.display = 'block';
    document.getElementById('see-btn4').style.display = 'none';

})

document.getElementById('see-btn5').addEventListener('click', function () {
    document.getElementById('nomore3').style.display = 'block';
    document.getElementById('see-btn6').style.display = 'block'
    document.getElementById('see-btn5').style.display = 'none';
})

document.getElementById('see-btn6').addEventListener('click', function () {
    document.getElementById('nomore3').style.display = 'none';
    document.getElementById('see-btn5').style.display = 'block';
    document.getElementById('see-btn6').style.display = 'none';

})



let search_b1 = document.getElementById('b1')
search_b1.addEventListener('click', () => {
    let s2_value = document.getElementById('s2').value



    if (s2_value == 'auditorium') {
        location_event.innerHTML = ""
        for (let i = 0; i < 3; i++) {
            let newItem = document.createElement('div');
            newItem.classList.add("card", "card-w")
            newItem.innerHTML = `
                <img src="${card[i].url}" class="card-img-top" alt="...">
                <div class="card-body">
                <p class="card-text">${card[i].para}</p>
                <p>${card[i].venue}</p>
    </div>
 
    `
            location_event.appendChild(newItem)
        }
    }
    if (s2_value == 'room') {
        location_event.innerHTML = ""
        for (let i = 3; i < 6; i++) {
            let newItem = document.createElement('div');
            newItem.classList.add("card", "card-w")
            newItem.innerHTML = `
                <img src="${card[i].url}" class="card-img-top" alt="...">
                <div class="card-body">
                <p class="card-text">${card[i].para}</p>
                <p>${card[i].venue}</p>
    </div>
 
    `
            location_event.appendChild(newItem)
        }

    }
    if (s2_value == 'field') {
        location_event.innerHTML = ""
        for (let i = 6; i < 9; i++) {
            let newItem = document.createElement('div');
            newItem.classList.add("card", "card-w")
            newItem.innerHTML = `
                <img src="${card[i].url}" class="card-img-top" alt="...">
                <div class="card-body">
                <p class="card-text">${card[i].para}</p>
                <p>${card[i].venue}</p>
    </div>
 
    `
            location_event.appendChild(newItem)
        }

    }
    if (s2_value == 'smart') {
        location_event.innerHTML = ""
        for (let i = 9; i < 12; i++) {
            let newItem = document.createElement('div');
            newItem.classList.add("card", "card-w")
            newItem.innerHTML = `
                <img src="${card[i].url}" class="card-img-top" alt="...">
                <div class="card-body">
                <p class="card-text">${card[i].para}</p>
                <p>${card[i].venue}</p>
    </div>
 
    `
            location_event.appendChild(newItem)
        }

    }
})



