import React from 'react';
import ReactDOM from 'react-dom/client';
import "./Project.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Header/>
  <Content/>
  <Footer/>
  </React.StrictMode>
);

function Header() {
  return (
    <div>
      <div class="custom-style">
      <h1 className="header-container">
        <span className="quiz-text">Quiz Craze..!</span>
      </h1>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>

        <div class="search-container">
          <input type="text" class="search-bar" placeholder="Search..." ></input>
        </div>
      </nav>
      </div>
      </div>
      
  );
}

function Content() {
  function displayResult(event){
    event.preventDefault();
    
    let ans1=event.target.q1.value;
    let ans2=event.target.q2.value;
    let ans3=event.target.q3.value;
    let ans4=event.target.q4.value;
    let ans5=event.target.q5.value;
    let ans6=event.target.q6.value;
    let ans7=event.target.q7.value;
    let ans8=event.target.q8.value;
    let ans9=event.target.q9.value;
    let ans10=event.target.q10.value;
    let mark=0;
    if(ans1 ==='A.Strongly Typed Language'){
      mark++;
    }
    if(ans2 ==='B.Dynamic Typed Language'){
      mark++;
    }
    if(ans3 ==='C.Scripted Typed Language'){
      mark++;
    }
    if(ans4 ==='C.Structured Query Language'){
      mark++;
    }
    if(ans5 ==='B.Hypertext Markedup Language'){
      mark++;
    }
    if(ans6 ==='A.Cascaded Style Sheet'){
      mark++;
    }
    if(ans7 ==='B.Objected Oriented Programing Language'){
      mark++;
    }
    if(ans8 ==='A.<script>'){
      mark++;
    }
    if(ans9 ==='A.DataBase Management System'){
      mark++;
    }
    if(ans10 ==='B.Relation Database Management System'){
      mark++;
    }
    if (
      ans1 && ans2 && ans3 && ans4 && ans5 &&
      ans6 && ans7 && ans8 && ans9 && ans10
    ) {
      alert("All questions are answered! Calculating total marks...");
      alert("Total mark: " + mark);
    } else {
      
      alert("Please answer all questions before submitting.");
    }

   // event.target.reset();
  }
  return (
    <div>
      <center>
      <h1>Answer the Following Question</h1>
      <form onSubmit={displayResult}>
      <Question
      ques="Q1.What is Java ?"
        op1="A.Strongly Typed Language"
        op2="B.Dynamic Typed Language"
        op3="C.Scripted Typed Language"
        name="q1"
        />
        <Question 
        ques="Q2.What is Python ?"
        op1="A.Strongly Typed Language"
        op2="B.Dynamic Typed Language"
        op3="C.Scripted Typed Language"
        name="q2"
        />
        <Question 
        ques="Q3.What is Javascript ?"
        op1="A.Strongly Typed Language"
        op2="B.Dynamic Typed Language"
        op3="C.Scripted Typed Language"
        name="q3"
        />
        <Question 
        ques="Q4.What is SQL ?"
        op1="A.Strongly Typed Language"
        op2="B.Dynamic Typed Language"
        op3="C.Structured Query Language"
        name="q4"
        />
         <Question 
        ques="Q5.What is HTML ?"
        op1="A.Strongly Typed Language"
        op2="B.Hypertext Markedup Language"
        op3="C.Structured Typed Language"
        name="q5"
        />
        <Question 
        ques="Q6.What is CSS ?"
        op1="A.Cascaded Style Sheet"
        op2="B.Hypertext Markedup Language"
        op3="C.Structured Typed Language"
        name="q6"
        />
        <Question 
        ques="Q7.What is OOPL ?"
        op1="A.Cascaded StyleSheet"
        op2="B.Objected Oriented Programing Language"
        op3="C.Structured Typed Language"
        name="q7"
        />
        <Question 
        ques="Q8.Inside which HTML element do we put the JavaScript?"
        op1="A.<script>"
        op2="B.<javascript>"
        op3="C.<js>"
        name="q8"
        />
         <Question 
        ques="Q9.What is DBMS ?"
        op1="A.DataBase Management System"
        op2="B.Hypertext Markedup Language"
        op3="C.Structured Typed Language"
        name="q9"
        />
         <Question 
        ques="Q10.What is RDMS ?"
        op1="A.DataBase Management System"
        op2="B.Relation Database Management System "
        op3="C.Structured Typed Language"
        name="q10"
        />
        <br></br>
        <input className='Submit' type ="submit" value ="Get Result" style={{padding:'10px',marginTop :'20px', marginBottom:'10px',width:'auto', color:'red'}}></input>
        <br></br>
        </form>
        </center>

    </div>
  );
}

function Question({ ques, op1, op2, op3, name }) {
  return (
    <div>
      <center>
      <h2>{ques}</h2>
      <input type="radio" id={`${name}_op1`} name={name} value={op1} />
      <label htmlFor={`${name}_op1`}>{op1}</label>
    
      <input type="radio" id={`${name}_op2`} name={name} value={op2} />
      <label htmlFor={`${name}_op2`}>{op2}</label>

      <input type="radio" id={`${name}_op3`} name={name} value={op3} />
      <label htmlFor={`${name}_op3`}>{op3}</label>
      </center>
    </div>
  );
}

function Footer() {
  return (
      <div className='footer'>
        <center>
        
      <p>Thank you for participating in the quiz!</p>
      <p>&copy; 2024 Kodnest@gmail.com</p>
      </center>
    </div>
  ); 
}