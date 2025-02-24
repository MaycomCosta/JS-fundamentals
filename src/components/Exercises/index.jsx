import { useState } from 'react'

import { Code } from '../'
import * as C from './styles'

export function Exercises({ dataExercises }) {
  const [isRunCode, setIsRunCode] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [postId, setPostid] = useState()

  const categories = [
    'Todos',
    ...new Set(dataExercises.map((data) => data.methods).flat())
  ]

  const filteredItems =
    selectedCategory === 'Todos'
      ? dataExercises
      : dataExercises.filter((data) => data.methods.includes(selectedCategory))

  function openCode(postData) {
    setIsRunCode(true)
    setPostid(postData)
  }

  return (
    <C.Container>
      {!isRunCode && (
        <C.CategoryContainer>
          {categories.map((category, index) => (
            <C.CategoryButton
              key={index}
              $active={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </C.CategoryButton>
          ))}
        </C.CategoryContainer>
      )}
      {!isRunCode ? (
        filteredItems &&
        filteredItems.map((data) => (
          <C.Content key={data.id}>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <button onClick={() => openCode(data)}>Testar Codigo</button>
          </C.Content>
        ))
      ) : (
        <Code setIsRunCode={setIsRunCode} data={postId} />
      )}
    </C.Container>
  )
}
