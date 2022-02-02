import React, { createContext } from 'react';

// 4 - importacao de componentes
import FirstComponent from './components/FirstComponent';

// 5 - desestruturando props
import SecondComponent from './components/SecondComponent';
import Destructuring, { Category } from './components/Destructuring';

// 6 - useState
import State from './components/State';

// 10 - context
import Context from './components/Context'

// 9 - type
type textOrNull = string | null
type fixed = "Isso" | "Ou" | "Aquilo"

// 10 - context
interface IAppContext {
  language: string,
  framework: string,
  projects: number
}

export const AppContext = createContext<IAppContext | null>(null)

function App() {

  // 1 - variaveis
  const name: string = 'Neder'
  const age: number = 30
  const isWorking: boolean = true

  // 2 - funcoes
  const userGreeting = (name: string): string => {
    return `Ola ${name}`
  }

  // 9 - type
  const myText: textOrNull = "Tem algum texto aqui"
  let mySecondText: textOrNull = null

  // mySecondText = 'Opa'

  const testandoFixed: fixed = "Isso"

  // 10 - context
  const contextValue: IAppContext = {
    language: "Javascript",
    framework: "Express",
    projects: 5
  }

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>Typescript com Reactjs</h1>
        <h2>Nome: {name}</h2>
        <p>Idade:  {age}</p>
        {isWorking && (
          <p>Esta trabalhando</p>
        )}
        <h3>{userGreeting(name)}</h3>
        <FirstComponent />
        <SecondComponent name="Segundo" />
        <Destructuring title='Primeiro post' content='Algum conteudo' commentsQty={10} tags={['ts', 'js']} category={Category.TS} />
        <State />
        {myText &&
          <p>Tem texto na variavel</p>
        }
        {mySecondText &&
          <p>Tem texto na variavel</p>
        }
        <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;
