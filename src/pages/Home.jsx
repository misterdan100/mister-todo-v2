import { useEffect, useState } from 'react';
import useTasks from '../hooks/useTasks'
import PreviewTask from '../components/PreviewTask'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import {adviceArray} from '../db/advices.js'
import 'react-circular-progressbar/dist/styles.css';
import '../styles/home.css'

const Home = () => {
  const { username, setUsername, tasks } = useTasks()

  // States for circle
  const [totalTasks, setTotalTasks] = useState(0)
  const [completedTasks, setCompletedTasks] = useState(0)
  const [percentage, setPercentage] = useState(0)
  const [colorCircle, setColorCircle] = useState('#ffa500')
  const [advice, setAdvice] = useState('')

  useEffect(() => {
    // Calculate values for circle graphic
    const updateRating = () => {
      setTotalTasks(tasks.length)
      let total = tasks.reduce((total, current) => {
        if(current.status === 'done') {
          return total + 1
        }
        return total
      }, 0)

      setCompletedTasks(total)
    }
    
    updateRating()
  }, [tasks])
  
  useEffect(() => {
    setPercentage((completedTasks * 100 / totalTasks).toFixed(0));
  }, [completedTasks, totalTasks]);
  
  useEffect(() => {
    setColorCircle((prevColorCircle) => {
      if (percentage >= 75) return '#37833B';
      else if (percentage > 33 && percentage < 75) return '#ffa500';
      else if (percentage <= 33) return '#D20A0A';
      else return prevColorCircle;
    });
  }, [percentage]);

  useEffect(() => {
    const getAdvice = async () => {
      const random = Math.floor(Math.random() * adviceArray.length)
      setAdvice(adviceArray[random])
    }
  
    getAdvice()
  }, [])


  return (
    <div className="home-container home">
      <div className="summary-section">
        <div className="summary-circle">
            <CircularProgressbar 
              value={percentage}
              text={`${percentage}% completed`}
              styles={buildStyles({
                textSize: '10px',
                pathColor: colorCircle,
                textColor: colorCircle,
              })}
              />

        </div>

        <div className="summary-data">
          <input 
            type='text'
            className="username" 
            placeholder='set a name...'
            value={username}
            onChange={e => setUsername(e.target.value.trimStart())}
          />

          <div className="summary-items">
            <p><span className='number'>{totalTasks}</span> Tasks in Total</p>
            <p><span className='number'>{completedTasks}</span> Completed Tasks</p>
            <p><span className='number'>{totalTasks - completedTasks}</span> Tasks waiting for you</p>
          </div>

          <div className="quotes-section">
            <span className='note'>to mativate you...</span>
            <p className="quote">
              {advice.advice}{" "}
              <span className="quote-author">- {advice.author}</span>
            </p>
          </div>
        </div>
        
      </div>

      <div className="tasks-section">
        <h4>Some pending tasks</h4>
        {tasks?.map( (task, index) => {
          if(index < 5) {
            return <PreviewTask key={task.name} task={task}/>
          }
          return null
        })}
      </div>
    </div>
  );
};

export default Home;

