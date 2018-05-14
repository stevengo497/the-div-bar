import React, { Component } from 'react';

 import '../styling/ReadMe.css';

class ReadMe extends Component {
    render () {
        return (
            <div>
                <h1 className="line-1 anim-readme">&lt; Read Me /&gt;</h1>
                <h1 id="readMeText"> &#60;!&#45;&#45; This concept bar was created with developers in mind. If you need a &lt;br /&gt;, come sit at The Var and order one of our specialty drinks such as a Sass on the Beach or ajax and coke.
                    <br/><br/>Our award winning chefs worked tirelessly in the backend to provide you with the best foods. Don’t believe us? Try our Shrimp and GITS or our famous Chinese EggNodes.
                    <br/><br/>If you would like to make reservations, please contact our localhostess and specify if you’d like a table with, or without a Vue. &#45;&#45;&#62;</h1>
            </div>
        )
    }
}

export default ReadMe;
