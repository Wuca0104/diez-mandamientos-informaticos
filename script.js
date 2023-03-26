
let selectedItem = 0;
let timer;


var defaults = {
    spread: 360,
    ticks: 50,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    shapes: ['star'],
    colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
  };
  
  function shoot() {
    const canvas = document.getElementById('confetti-canvas');
    confetti({
      ...defaults,
      particleCount: 40,
      scalar: 1.2,
      shapes: ['star']
    });
  
    confetti({
      ...defaults,
      particleCount: 10,
      scalar: 0.75,
      shapes: ['circle']
    });
  }
  
  setTimeout(shoot, 0);
  setTimeout(shoot, 100);
  setTimeout(shoot, 200);



    

function selectRandomItem() {
    const items = document.querySelectorAll('.roulette-item');
   

  items[selectedItem].classList.remove('active');

  selectedItem++;

  if (selectedItem >= items.length) {
    selectedItem = 0;
  }

  items[selectedItem].classList.add('active');

  timer=setTimeout(selectRandomItem, 100);
  
}

function startAnimation() {
    selectRandomItem();
    setTimeout(stopAnimation, 2800);
    
  }
  
  function stopAnimation() {
    clearTimeout(timer);
    shoot();
    cardText(selectedItem);
  }

  function cardText(selectedItem){
    const titleElement = document.querySelector('.flip-card-front h2');
    const contentElement = document.querySelector('.flip-card-front p');
    const titleElementback = document.querySelector('.flip-card-back h2');
    const contentElementback = document.querySelector('.flip-card-back p');
    
    switch(selectedItem) {
        case 0:
            titleElement.innerHTML = 'No utilizaras la computadora para dañar a otros';
            contentElement.innerHTML = 'Este mandamiento se refiere a no utilizar la tecnología para hacer daño a otras personas o entidades, ya sea mediante ataques cibernéticos, virus, malware, phishing, entre otros.';
            titleElementback.innerHTML = 'Utilizarás la tecnología para mejorar la vida de las personas y no para dañarlas';
            contentElementback.innerHTML = 'Se debe utilizar la tecnología para fines positivos, como la comunicación, la investigación, la colaboración y el entretenimiento';
            break;
        case 1:
            titleElement.innerHTML = 'No indagarás en archivos ajenos';
            contentElement.innerHTML = 'Se trata de no acceder a información privada de otros usuarios sin su consentimiento, ya que esto puede ser considerado como una invasión a la privacidad.';
            titleElementback.innerHTML = 'Respetarás la privacidad de otros usuarios y no accederás a información privada sin su consentimiento.';
            contentElementback.innerHTML = 'Se debe ser consciente de que la privacidad es un derecho fundamental, y siempre se debe pedir permiso antes de acceder a la información de otra persona.';
            break;
        case 2:
            titleElement.innerHTML = 'No interferirás con el trabajo ajeno';
            contentElement.innerHTML = 'Este mandamiento busca fomentar la colaboración y el respeto en el ámbito laboral, evitando interferir o bloquear el trabajo de otros usuarios en la red.';
            titleElementback.innerHTML = 'Fomentarás la colaboración y el respeto en el ámbito laboral,';
            contentElementback.innerHTML = 'Se debe trabajar de manera colaborativa para lograr objetivos comunes, promoviendo la colaboración y el respeto en el ámbito laboral';
            break;
        case 3:
            titleElement.innerHTML = 'No utilizarás una computadora para robar';
            contentElement.innerHTML = 'Esto incluye no utilizar la tecnología para cometer actos de robo, ya sea de información confidencial, propiedad intelectual, contraseñas, entre otros.';
            titleElementback.innerHTML = 'Utilizarás la tecnología de manera honesta y ética';
            contentElementback.innerHTML = 'Se debe fomentar el respeto por la propiedad ajena y la legalidad en el uso de la tecnología';
            break;
        case 4:
            titleElement.innerHTML = 'No utilizar la informática para realizar fraudes ';
            contentElement.innerHTML = 'Este mandamiento se refiere a no utilizar la tecnología para cometer fraudes, ya sea en transacciones comerciales, financieras, entre otras.';
            titleElementback.innerHTML = 'Realizaras transacciones comerciales y financieras de manera honesta y legal';
            contentElementback.innerHTML = 'Este mandamiento hace referencia a la importancia de actuar con honestidad y ética en las transacciones comerciales y financieras que se realizan a través de la tecnología';
            break;
        case 5:
            titleElement.innerHTML = 'No copiarás o utilizarás software que no hayas comprado';
            contentElement.innerHTML = 'Este mandamiento busca fomentar el respeto por los derechos de autor y de propiedad intelectual, evitando la copia o uso no autorizado de software.';
            titleElementback.innerHTML = 'Utilizarás software original siempre que se pueda';
            contentElementback.innerHTML = 'Evitar el uso de software pirata y optar por software original, lo que además de ser ético, también garantiza la seguridad y estabilidad del sistema';
            break;
        case 6:
            titleElement.innerHTML = 'No utilizarás  los recursos informáticos ajenos sin la debida autorización';
            contentElement.innerHTML = 'Se trata de respetar el uso de los recursos informáticos de otras personas o entidades, pidiendo la debida autorización para acceder a ellos.';
            titleElementback.innerHTML = 'Pedirás la debida autorización para acceder a los recursos informáticos de otras personas o entidades';
            contentElementback.innerHTML = 'Esto es importante porque no todos los recursos informáticos están destinados al uso público, y el acceso no autorizado puede ser considerado un delito.';
            break;
        case 7:
            titleElement.innerHTML = 'No te apropiarás de los derechos intelectuales de otros';
            contentElement.innerHTML = 'Este mandamiento busca fomentar el respeto por los derechos de autor y de propiedad intelectual, evitando la apropiación de ideas, textos, imágenes, entre otros, que no sean de tu autoría';
            titleElementback.innerHTML = 'Darás el credito al autor original cuando utilices parte de su trabajo';
            contentElementback.innerHTML = 'Al dar crédito al autor original, se reconoce su trabajo y se evita el plagio. Esto se aplica a diferentes formas de trabajo intelectual, como textos, imágenes, música, código, entre otros.';
            break;
        case 8:
            titleElement.innerHTML = 'Deberás evaluar las consecuencias sociales de cualquier código que desarrolles';
            contentElement.innerHTML = 'Este mandamiento busca fomentar la responsabilidad social en el desarrollo de código y aplicaciones, considerando el impacto que pueden tener en la sociedad';
            titleElementback.innerHTML = 'Desarrollarás tecnología de manera responsable y considerando su impacto en la sociedad.';
            contentElementback.innerHTML = 'Los desarrolladores deben ser conscientes de cómo sus proyectos pueden afectar a la sociedad, y tomar medidas para evitar consecuencias negativas.';
                break;
        case 9:
            titleElement.innerHTML = 'Siempre utilizarás las computadoras respetando los derechos de los demás.';
            contentElement.innerHTML = 'Este mandamiento busca fomentar el respeto, la colaboración y la empatía en el uso de la tecnología, considerando los derechos y necesidades de otros usuarios';
            titleElementback.innerHTML = 'Utilizarás las computadoras de manera respetuosa, considerando los derechos y necesidades de otros usuarios.';
            contentElementback.innerHTML = 'Al respetar los derechos de otros usuarios, se promueve un ambiente de colaboración, diálogo y convivencia pacífica en la red.';
            break;  
      }
  }







  