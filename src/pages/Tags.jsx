import { useEffect, useState } from 'react'
import TagCard from '../components/TagCard'
import useTasks from '../hooks/useTasks'
import '../styles/projects.css'

const Tags = () => {
  const { tasks } = useTasks()

  const [tags, setTags] = useState([])

  useEffect(() => {
    const getTags = () => {
      let tagList = []
      for(let tagArray of tasks) {
        if(tagArray.tags.length >= 1) {
          tagArray.tags.forEach( tag => {
            if(!tagList.includes(tag)) {
              tagList.push(tag)
            }
          })
        }
      }

      setTags(tagList)
    }

    getTags()
  }, [])

  return (
    <div className='projects-container'>
      {tags?.map( (tag, index) => <TagCard key={index} tag={tag}/>)}
    </div>
  )
}

export default Tags