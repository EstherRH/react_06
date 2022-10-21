
import React from "react";
import './Aaa.css';

const Aaaa = () => {

    let section = document.querySelectorAll('section');
    let lists = document.querySelectorAll('.list');
    function activeLink(li) {
        lists.forEach((item) => item.classList.remove('active'));
        li.classList.add('active');
    }
    lists.forEach((item) =>
        item.addEventListener('click', function(){
            activeLink(this);
        }));

    window.onscroll = () => {
        section.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                const target = document.querySelector(`[href='#${id}']`).parentElement;
                activeLink(target);
            }
        })
    };

    return (
        <>
            <nav className="navigation">
                <ul>
                    <li className="list active">
                        <a href="src/components/01_ejercicios/navbar/Aaa#home">
                    <span className="icon">
                        <ion-icon name="home-outline"></ion-icon>
                    </span>
                            <span className="title">Home</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="src/components/01_ejercicios/navbar/Aaa#about">
                    <span className="icon">
                        <ion-icon name="person-outline"></ion-icon>
                    </span>
                            <span className="title">About Me</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="src/components/01_ejercicios/navbar/Aaa#working">
                    <span className="icon">
                        <ion-icon name="newspaper-outline"></ion-icon>
                    </span>
                            <span className="title">Working</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="src/components/01_ejercicios/navbar/Aaa#Learned">
                    <span className="icon">
                        <ion-icon name="code-slash-outline"></ion-icon>
                    </span>
                            <span className="title">Learned</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="src/components/01_ejercicios/navbar/Aaa#contact">
                    <span className="icon">
                        <ion-icon name="chatbox-outline"></ion-icon>
                    </span>
                            <span className="title">Contact</span>
                        </a>
                    </li>
                </ul>
            </nav>

            <section className="sec"  id="home">sgsf</section>
            <section className="sec"  id="about">sfgsg</section>
            <section className="sec"  id="working">vvvv</section>
            <section className="sec"  id="Learned">hhh</section>
            <section className="sec"  id="contact">tttt</section>

        </>
    )
}

export default Aaaa;


