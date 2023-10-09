const container = document.querySelector('.container');
const showAll = document.getElementById('show-all');
const nature = document.getElementById('nature');
const cars = document.getElementById('car');
const people = document.getElementById('people');

const datas = [{
    nature : [{
       src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
       title: "Mountains",
       description: "Alone in the unspoilt wilderness"
    }, 
    {
       src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
       title: "Lights", 
       description: "Body Grassland in Yili, China"
    }, 
    {
        src: "https://plus.unsplash.com/premium_photo-1673603988651-99f79e4ae7d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        title: "Nature",
        description: "Yosemite National Park, California, USA"
    }],

    cars : [{
        src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        title: "Retro",
        description: "Alone in the unspoilt wilderness"
     }, 
     {
        src: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        title: "Fast", 
        description: "Body Grassland in Yili, China"
     }, 
     {
         src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
         title: "Classic",
         description: "Yosemite National Park, California, USA"
     }],

     people : [{
        src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        title: "People",
        description: "Alone in the unspoilt wilderness"
        },
        {
        src: "https://plus.unsplash.com/premium_photo-1664908266568-92b4f32e97c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        title: "Women",
        description: "Body Grassland in Yili, China"
        },
        {
        src: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        title: "Men",
        description: "Yosemite National Park, California, USA"
        }]
}]

const paint = () => {
    container.innerHTML = "";
    datas.forEach((data) => {
        data.nature.forEach((image) => {
            container.innerHTML += `<div class="images"><img src="${image.src}"><h3>${image.title}</h3><p>${image.description}</p></div>`;
        })
        data.cars.forEach((image) => {
            container.innerHTML += `<div class="images"><img src="${image.src}"><h3>${image.title}</h3><p>${image.description}</p></div>`;
        })
        data.people.forEach((image) => {
            container.innerHTML += `<div class="images"><img src="${image.src}"><h3>${image.title}</h3><p>${image.description}</p></div>`;
        })
    })
   }

showAll.addEventListener('click', () => {
    paint();
})


nature.addEventListener('click', () => {
    container.innerHTML = "";
    datas.forEach((data) => {
        data.nature.forEach((image) => {
            container.innerHTML += `<div class="images"><img src="${image.src}"><h3>${image.title}</h3><p>${image.description}</p></div>`;
        })
    })
})

cars.addEventListener('click', () => {
    container.innerHTML = "";
    datas.forEach((data) => {
        data.cars.forEach((image) => {
            container.innerHTML += `<div class="images"><img src="${image.src}"><h3>${image.title}</h3><p>${image.description}</p></div>`;
        })
    })
})

people.addEventListener('click', () => {
    container.innerHTML = "";
    datas.forEach((data) => {
        data.people.forEach((image) => {
            container.innerHTML += `<div class="images"><img src="${image.src}"><h3>${image.title}</h3><p>${image.description}</p></div>`;
        })
    })
})

window.addEventListener('DOMContentLoaded', () => {
    paint();
})