import { Exercises } from '../../components/'
import dataExercises from '../../data.json'
import * as C from './styles.js'

export function Home() {
  return (
    <C.Container>
      <h1>My JS Fundamentals</h1>
      <div className="underline"></div>
      <Exercises dataExercises={dataExercises} />
    </C.Container>
  )
}
