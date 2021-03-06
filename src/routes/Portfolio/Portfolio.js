/* eslint-disable */
import React, { Component } from 'react';
import './Portfolio.scss';
import SlideShow from './SlideShow';


export default class Portfolio extends Component {
    state = {
        projects: [
            {
                id: 1,
                title: 'Groop',
                description: `Groop is a task manager for family, friends, or work. Organize tasks and members from multiple groups and view a scoreboard to effectively finish tasks done on time. Members accumulate points based on a finished task's priority level. Get status updates and weekly reminders with optional email notifications.`,
                mImg: 'https://i.imgur.com/RyN8nbK.png',
                img: ['https://i.imgur.com/gGmJ9Y1.jpg','https://i.imgur.com/eUhL9aG.png','https://i.imgur.com/1VK66Oc.png'],
                stack: 'ReactJS, SCSS, Node, Express, Knex, PostgreSQL, Mocha, Chai',
                live: 'https://grooplist.com/',
                repo: "https://github.com/joeyjr95/groop-client",
                
            },
            {
                id: 2,
                title: 'Wortjäger',
                description: ' Wortjäger is a React application that teaches users simple German words via spaced repetition. German words are displayed on the page and users are expected to provide the correct English translation of the word. Spaced repetition works by more frequently showing words that users get wrong and less frequently displaying words that users answer correctly.',
                mImg: 'https://i.imgur.com/fimI56i.png',
                img: ['https://i.imgur.com/NDYb4gr.png','https://i.imgur.com/19liZkD.png','https://i.imgur.com/vQXhVG0.png'],
                stack: 'ReactJS, CSS, Node, Express, Knex, PostgreSQL, Mocha, Chai',
                live: "https://william-joey-wortjager-app.now.sh",
                repo: "https://github.com/thinkful-ei-gecko/william-joey-spaced-repetition-client",

            },
            {
                id: 3,
                title: 'How You Doin?',
                description: `"How You Doin?" lets you keep track of how you're doing mentally and physically daily and keeps charts on the desktop app and averages to show you how you're progressing through the week and overall time of using the app. On the homepage, you have access to your data as well as two different charts helping you visualize your day to day progress as well as your overall progress.`,
                mImg: "https://i.imgur.com/on46Q9J.png",
                img: ['https://i.imgur.com/RKp9DjH.jpg','https://i.imgur.com/kBNaIKL.png','https://i.imgur.com/9CK95ou.png'],
                stack: 'ReactJS, CSS, Node, Express, Knex, PostgreSQL, Mocha, Chai',
                live: "https://frontend.joeyjr95.now.sh",
                repo: "https://github.com/joeyjr95/daily-wellness",

            }
            
        ],
        collapssed: {1:true},
        window: null

        
    }
    toggle(id){
        this.setState({
            collapssed:{
                //  ...this.state.collapssed,
                [id]: !this.state.collapssed[id]
            }
        })
    }
render(){
    const { projects = [], collapssed} = this.state
    console.log(collapssed)
    return(
    
        <section className="portfolio-section">
            <div className="h3-container">
            <h3>Projects</h3>
            </div>
            <div className="projects">
             {projects.map(project => (
                <section className="project-main" key={project.id}> 
               <a href="#"
            className="collapsseToggle"
            onClick={() => this.toggle(`${Number(project.id)}`)}
          ><h4>{project.title}</h4></a>
               <div className="project-body">
               <div className={collapssed[Number(project.id)] ? "toggleContent-open" : "toggleContent-closed"}>
                   <div className="section-flex">
                <p className="description">
                {project.description}
                </p>
                
                 <SlideShow images={project.img}/>     
                 </div> 
                <p className="stack">Tech Stack: {project.stack}</p>
                <div className="links">
                <a href={project.live} rel="noopener noreferrer" target="_blank">live project</a>
                <a href={project.repo} rel="noopener noreferrer" target="_blank">repo</a>
                </div>
             </div>  
          
          
          </div>
            </section>
          
          
))}
            </div>
                </section>

            
        
    )
}
}
// window.innerWidth >= 800 ? project.img : project.mImg