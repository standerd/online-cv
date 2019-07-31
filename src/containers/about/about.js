import React from 'react';
import "../../App.css"


const about = () => (
    <div>
        <img src={require("../../images/profile.jpg")} alt="profile" />
        <h1>Dewald Stander</h1>
        <h2>Student Full Stack Web Developer</h2>
        <span><i class="far fa-address-card"></i></span>
        <p><i class="fas fa-envelope-open-text"></i> stander.dewald@gmail.com</p>
        <p><i class="fas fa-phone"></i> 082 7773 793</p>
        <a href="https://github.com/standerd?tab=repositories"><i class="fab fa-github"></i></a>
        <h2>Technologies</h2>
        <span><i class="fab fa-html5"></i></span>
        <span><i class="fab fa-css3"></i></span>
        <span><i class="fab fa-react"></i></span>
        <span><i class="fab fa-node"></i></span>
        <span><i class="fab fa-js"></i></span>
        <span><i class="fas fa-database"></i></span>

        <p>Always striving to expand and learn more</p>
    </div>
)
    

export default about;