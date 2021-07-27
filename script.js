'use strict';

function clear(id){
    document.getElementById(id).value = '';
}

function login(e){
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'kelompok-4' && password ==='kelompok-4'){
        alert('Login berhasil');
    } else{
        alert('Login gagal');
    }
    clear('username');
    clear('password');
}

function signup(e){
    e.preventDefault();
    const username = document.getElementById('username-signup').value;
    const password = document.getElementById('password-signup').value;
    const email = document.getElementById('email').value
    alert('Berhasil');
    clear('username-signup');
    clear('password-signup');
    clear('email');
}

function closeModal() {
    document.getElementsByClassName('modal')[0].classList.add('hidden');
}

function showModal(message) {
    document.getElementsByClassName('modal__message')[0].innerHTML = message;
    document.getElementsByClassName('modal').classList.remove('hidden');
}

function show(showclass, hiddenclass1, hiddenclass2) {
    document.getElementsByClassName(showclass)[0].classList.remove('hodden');
    document.getElementsByClassName(hiddenclass1).[0].classList.add('hidden');
    document.getElementsByClassName(hiddenclass2).[0].classList.add('hidden');
}