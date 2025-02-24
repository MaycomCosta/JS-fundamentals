import { useState } from 'react'

import * as functions from '../../utils/'
import * as C from './styles'

export function Code({ data, setIsRunCode }) {
  const [firstParam, setFirstParam] = useState('')
  const [secondParam, setSecondParam] = useState('')

  const [output, setOutput] = useState(null)

  function runCode() {
    const func = functions[data.functionName]

    if (func) {
      try {
        const result = func(firstParam, secondParam)

        setOutput(result)
      } catch (error) {
        setOutput('Error executing function')
      }
    } else {
      setOutput('Function not found')
    }
  }

  return (
    <C.Container>
      <h1>{data.title}</h1>
      <h3>{data.instructions}</h3>
      <h2>
        {data.functionName}(
        {data.parameters.length === 1 ? (
          <input
            type="text"
            placeholder={data.parameters}
            value={firstParam}
            onChange={(e) => setFirstParam(e.target.value)}
          />
        ) : (
          <>
            <input
              type="text"
              placeholder={data.parameters[0]}
              value={firstParam}
              onChange={(e) => setFirstParam(e.target.value)}
            />
            <span>,</span>
            <input
              type="text"
              placeholder={data.parameters[1]}
              value={secondParam}
              onChange={(e) => setSecondParam(e.target.value)}
            />
          </>
        )}
        )
      </h2>
      )
      <div className="divButtons">
        <button onClick={runCode}>Testar</button>

        <button onClick={() => setIsRunCode(false)}>Voltar</button>
      </div>
      {output && (
        <div className="containerOutput">
          <p>Resultado: {output}</p> <br />
        </div>
      )}
    </C.Container>
  )
}
