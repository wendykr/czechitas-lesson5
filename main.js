// tady je místo pro náš program

let button = document.querySelectorAll('.button');

button[0].addEventListener('click',
  function() {
	let vstupJmeno = String(prompt('Jméno:'));

    let messageVek = 'Výchozí hodnota';
    let messageHeslo = 'Výchozí hodnota';

	if (vstupJmeno === '') {
        alert('Jméno je povinný údaj');
    } else {
		let vstupVek = Number(prompt('Věk:'));

		if (vstupVek === '') {
            alert('Věk je povinný údaj');
        } else if (vstupVek >= 65) {
            messageVek = "Věk v pořádku";
            console.log(messageVek);
        } else if (vstupVek <= 65) {
            messageVek = "Nízký věk";
            console.log(messageVek);
        }
        let vstupHeslo = prompt('Heslo:');

            if (vstupHeslo === '') {
                alert('Heslo je povinný údaj');
            } else if (vstupHeslo.length <= 8) {
                messageHeslo = '<span style="color: red;">slabé heslo</span>';
                console.log(messageHeslo);
            } else {
                messageHeslo = '<span style="color: green;">silné heslo</span>';
                console.log(messageHeslo);
            }

            

            const user = {
                name: vstupJmeno,
                age: vstupVek,
                pass: vstupHeslo,
            }
		
		let osoba = document.querySelector('.osoba');
		osoba.innerHTML = `
                <div>
                    <p><strong>Uživatel</strong>: ${user.name}</p>
                    <p><strong>Věk</strong>: ${user.age} let ${messageVek}</p>
                    <p><strong>Heslo</strong>: ${messageHeslo}</p>
                </div>
        `;
        console.log(osoba);
		
		button[0].classList.add('hidden');
	}
  }
);

button[1].addEventListener('click',
  function() {
	let vstupVek = Number(prompt('Věk:'));

    let message = 'Výchozí hodnota';
    const plnaCena = 12;
    let cena = '';

	if (vstupVek === '') {
            alert('Věk je povinný údaj');
    } else {

        if (vstupVek < 6) {
            cena = 0;
            message = 'Děti';
        } else if (vstupVek >= 6 && vstupVek <= 26) {
            cena = plnaCena * 0.65;
            message = 'Žák, student';
        } else if (vstupVek >= 27 && vstupVek <= 64) {
            cena = plnaCena;
            message = 'Dospělý';
        } else {
            cena = plnaCena * 0.50;
            message = 'Senior';
        }
        cena = Math.ceil(cena);

        const ticket = {
            age: vstupVek,
            price: cena,
        }
		
		let vstupenka = document.querySelector('.vstupenka');
		vstupenka.innerHTML = `
                <div>
                    <p><strong>Kategorie</strong>: ${message} (${ticket.age} let)</p>
                    <p><strong>Vstupné</strong>: ${ticket.price} EUR</p>
                </div>
        `;
        console.log(vstupenka);
		
		button[1].classList.add('hidden');
	}
  }
);