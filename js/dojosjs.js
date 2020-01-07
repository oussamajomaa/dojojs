let fleche = document.querySelectorAll('.picto');
let nextEl = document.querySelectorAll('main > section > section > article > div');
let aside = document.querySelector('main > section > aside > div');


for (let i = 0; i < fleche.length; i++) {
    fleche[i].addEventListener('click', () => {
        for (let j = 0; j < nextEl.length; j++) {
            nextEl[j].style.visibility = 'hidden';
            nextEl[j].style.height = "0"
        }
        nextEl[i].style.visibility = 'visible';
        nextEl[i].style.height = "auto"
    })
}

aside.addEventListener('mouseover', () => {
    aside.style.borderRadius = '0px';
})

aside.addEventListener('mouseout', () => {
    aside.style.borderRadius = '100px';
})


let nav = document.querySelector('nav');
let ul1 = document.createElement('ul');
nav.appendChild(ul1);
ul1.style.display = 'flex';
// ul1.style.listStyle = 'none';

let footer = document.querySelector('footer');
let ul2 = document.createElement('ul');
footer.appendChild(ul2);
ul2.style.display = 'flex';
// ul2.style.listStyle = 'none';


fetch("js/data/menu.json")
    .then((res) => {
        res.json()
            .then((data) => {
                for (let i = 0; i < data.principal.length; i++) {
                    let li = document.createElement('a');
                    li.textContent = data.principal[i].nom;
                    li.setAttribute('href', data.principal[i].lien)
                    nav.appendChild(li);
                    li.style.margin = '1em';


                    if (data.principal[i].sousmenus) {
                        // let ul3 = document.createElement('ul');
                        // li.appendChild(ul3);
                        for (let j = 0; j < data.principal[i].sousmenus.length; j++) {
                            let li1 = document.createElement('a');
                            li1.textContent = data.principal[i].sousmenus[j].nom;
                            li1.setAttribute('href', data.principal[i].sousmenus[j].lien)
                            li.appendChild(li1);
                            li1.style.display='none'
                        }
                        // ul3.style.display='none';
                    }

                    let lii = document.createElement('a');
                    lii.textContent = data.pied[i].nom;
                    lii.setAttribute('href', data.pied[i].lien)
                    ul2.appendChild(lii);
                    lii.style.margin = '1em';

                }
            })
    }).catch((err) => {
        console.log(err);
    })


