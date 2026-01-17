import { Alcaline } from "../section/Alcaline"
import { Approach } from "../section/approach"
import { Customer } from "../section/customer"
import { Devlop } from "../section/devlop"
import { Feature } from "../section/Feature"
import { Hero } from "../section/hero"
import { Software } from "../section/software"
import { Stack } from "../section/stack"
import { Case } from "./Case"
import { Hire } from "./Hire"
import { Services } from "./Services"
import { Works } from "./Works"

export const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Devlop />
      <Works />
      <Customer />
      <Case />
      <Software />
      <Approach/> 
      <Stack/>s
      <Alcaline/>
      <Feature/>
      <Hire/>
    </>
  )
}