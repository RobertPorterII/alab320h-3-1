/* eslint-disable react/no-unknown-property */
import { useState } from 'react';
import Learner from './components/Learner';
import './App.css'

const data = [
  {
  id: 'cait',
name: 'Cait Yomorta',
bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus placeat nostrum explicabo? Voluptatibus expedita saepe officia optio, commodi totam ratione laudantium ipsum porro molestias, quasi nulla minus vitae laboriosam corrupti Delectus inventore explicabo est odit incidunt rem a recusandae eum pariatur. Aperiam doloremque blanditiis harum voluptate animi fugit beatae asperiores quo, dignissimos sed illum veniam eum accusantium nulla quod voluptatum',
scores: [
  {
    date: '2018-02-08',
    score: 77
  },
  {
    date: '2018-04-22',
    score: 92
  },
  {
    date: '2018-09-15',
    score: 68
  }
]
},
{
  id: 'holly',
name: 'Holly Baird',
bio: 'Eum molestiae explicabo deserunt, maiores quod eaque omnis tenetur vero ducimus, magnam autem! Quia facere quaerat eum repudiandae dolorum eligendi iure quae. Eos id possimus accusantium, earum animi modi hic.',
scores: [
  {
    date: '2018-12-14',
    score: 88
  },
  {
    date: '2019-01-09',
    score: 79
  },
  {
    date: '2019-02-23',
    score: 91
  },
  {
    date: '2019-03-01',
    score: 95
  }
]
},
{
  id: 'wes',
name: 'Wes Mungia',
bio: 'Repudiandae veritatis recusandae quidem tenetur impedit, numquam incidunt enim, adipisci id cupiditate asperiores nam perferendis. Facere odit laborum ipsum autem repellendus natus eius doloremque ullam perferendis. Enim repellendus ut veniam?',
scores: [
  {
    date: '2018-10-11',
    score: 62
  },
  {
    date: '2018-11-24',
    score: 74
  },
  {
    date: '2018-12-19',
    score: 85
  },
],
},
];

function Form() {

  const [newLeaner, setNewLeaner] = useState ({
    name:"New Learner",
    bio: "Student",
  });

  function handleChange(e) {
    setNewLeaner({
      ...newLeaner,
      [e.target.name]: e.target.value,
    });
    
  }

  function handleBioChange(e) {
    setNewLeaner({
      ...newLeaner,
      [e.target.bio]: e.target.value,
    });
    
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newLeaner);
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
        name="name"
        value={newLeaner.name}
        onChange={handleChange}
        />
      </label>
      <label>
        Bio:
        <input
        name="bio"
        value={newLeaner.bio}
        onChange={handleBioChange}
        />
      </label>

    </form>
  )
  
}

  

function App() {
  // 2
  const [leanersData, setLeanersData] = useState({ learners: data});
  const [formData, setFormData] = useState({
    name:'',
    bio:'',
    //score: []
  });

  const handleChange = (e) => {
    setFormData ({
      ...formData,
      [e.target.name]: e.target.value
    })
  };
  const handleSubmit =(e) => {
    e.preventDefault();
    console.log(formData);
    const newLearner = {...formData, scores: []};
     // recreate the State updating the learnersData with the newLearner
    setLeanersData({
    
      learners: [newLearner, ...leanersData.learners]
    })

    //creates the formData
    setFormData({
      name:'',
      bio: ''
    })

    
  }

  

  return (
    <>
    
       <h1>Learners App</h1>

       <Form />

       <form>
       <label>
        Name:
        <input type="text" name="name" />

        <label>
          Bio:
          <input type="text" name="bio" />
        </label>
       </label>
       <button>Submit</button>

       </form>
       {/* 3 map over learndata here */}
       {leanersData.learners.map((learner, index) => {
        return <Learner learner={learner} key={index} />
       })}

     
     <form onSubmit={handleSubmit}>
     <label htmlFor='name'>Name: </label>
      <input type="text" name="name" value={formData.name} onChange={handleChange}/>
      <br />
      <label htmlFor='bio'>Bio: </label>

      <input type="text" name="bio" value={formData.bio} onChange={handleChange}/>

      <br />
      <input type='submit' value='Add' />
     </form>
 
    </>
  );
}

export default App;
