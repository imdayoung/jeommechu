function addPerson(){
    let newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.name = 'person';
    newInput.placeholder = '이름을 입력해주세요.';
    newInput.classList.add('person-input');

    document.getElementById('person-list').appendChild(newInput);
}

function removePerson() {
    let personList = document.getElementById('person-list');
    if (personList.lastChild) {
        personList.removeChild(personList.lastChild);
    }
}

function selectRandomPerson() {
    let inputs = document.querySelectorAll('.person-input');
    let names = Array.from(inputs)
                    .map(input => input.value)
                    .filter(name => name.trim() !== '');
    console.log(names);

    if (names.length > 0) {
        let randomIndex = Math.floor(Math.random() * names.length);
        let selectedPerson = names[randomIndex];
        document.getElementById('person-result').textContent = '결제할 사람: ' + selectedPerson;
    } else {
        document.getElementById('person-result').textContent = '사람을 추가해주세요.';
    }
}