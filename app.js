const onglets = document.querySelectorAll('.onglets');
const contenu = document.querySelectorAll('.contenu');

let index = 0;

onglets.forEach(onglet => {

    onglet.addEventListener('click', () => {

        if(onglet.classList.contains('active')){
            return;
        }else {
            onglet.classList.add('active');
        }

        index = onglet.getAttribute('data-anim');
        console.log(index);

        for(i = 0; i < onglets.length; i++) {

            if(onglets[i].getAttribute('data-anim') != index) {
                onglets[i].classList.remove('active');
            }
        }

        for(j = 0; j < onglets.length; j++){

            if (contenu[j].getAttribute('data-anim') == index) {
                contenu[j].classList.add('activeContenu');  
            } else {
                contenu[j].classList.remove('activeContenu');
            }

        }

    })

})

const  txtAnim = document.querySelector('h1');

new Typewriter(txtAnim,{
    
    deleteSpeed:40
})
.typeString('ROXANE BRETON')
.pauseFor(350)
.changeDelay(40)
.typeString('<strong>, Développeuse web !<strong>')
.pauseFor(350)
.changeDelay(40)
.deleteChars(19)
.changeDelay(40)
.pauseFor(350)
.typeString(' en cours d\'apprentissage !')
.pause(1000)
.start()