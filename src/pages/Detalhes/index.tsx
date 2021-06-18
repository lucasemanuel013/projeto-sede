import React, { useEffect, useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import {HiOutlineArrowNarrowLeft} from 'react-icons/hi'
import api from '../../services/api'

import { Container, Lista, Item } from './styles'

interface Sedes {
  id: string;
  ano: number;
  sede: string;
  campeao: number;
}

interface SedesParametros {
  campeao: string
}

const Detalhes: React.FC = () => {
  const { params: { campeao } } = useRouteMatch<SedesParametros>()
  const [ sedes, setSedes ] = useState<Sedes[]>([])

  useEffect(() => {
    carregarSedes()
    console.log(campeao)
  }, [])

  async function carregarSedes() {
    const data: Sedes[] = await api.get('/worldcup').then(response => response.data)
    const sedesFiltarada = data.filter(item => item.campeao.toString().toLowerCase() === campeao.toLowerCase())
    setSedes(sedesFiltarada)
  }

  return (
    <Container>
      <h1>{`Campeão: ${campeao}`}</h1>
    	<Lista>
        {
          sedes.map(copa => (
            <Item key={copa.id}>
              <span>{`Ano: ${copa.ano}`}</span>
              <span>{`Sede: ${copa.sede}`}</span>
            </Item>
          ))
        }
      </Lista>
      <Link to="/">
        <HiOutlineArrowNarrowLeft size={30} />
      </Link>
    </Container>
  )
}

export default Detalhes
