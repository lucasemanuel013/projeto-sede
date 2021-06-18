import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaTrash } from 'react-icons/fa'
import { CgDetailsMore } from 'react-icons/cg'

import api from '../../services/api'

import { Container, Lista, Item } from './styles'

interface Sedes {
  id: string;
  ano: number;
  sede: string;
  campeao: number;
}

const Dashboard: React.FC = () => {

  const [ sedes, setSedes ] = useState<Sedes[]>([])

  useEffect(() => {
    carregarSedes()
  }, [])

  async function carregarSedes() {
    const data = await api.get('/worldcup').then(response => response.data)
    console.log(data)
    setSedes(data)
  }

  async function cadastrarPais(event: any) {
    event.preventDefault()
    const { target } = event

    const novoPais = {
      ano: target.ano.value,
      sede: target.sede.value,
      campeao: target.campeao.value
    }


    const data = await api.post('/worldcup', novoPais).then(response => response.data)
    target.reset()
    setSedes([...sedes, data])
  }

  async function deletarSede(id: string) {
    await api.delete(`/worldcup/${id}`)
    window.location.href = "/"
  }

  return (
    <Container>
      <form onSubmit={cadastrarPais}>
        <input type='text' name='ano' required placeholder='Ano da Copa Mundo' />
        <input type='text' name='sede' required placeholder='Sede da Copa do Mundo' />
        <input type='text' name='campeao' required placeholder='Campeo Mundial' />
        <button type="submit">Salvar</button>
      </form>

    	<Lista>
        {
          sedes.map(copa => (
            <Item key={copa.id}>
              <span>{`Ano: ${copa.ano}`}</span>
              <span>{`Sede: ${copa.sede}`}</span>
              <span>{`Campeão: ${copa.campeao}`}</span>
              <button type="button" >
                <Link to={`/detalhes/${copa.campeao}`}>
                  <CgDetailsMore size={20} />
                </Link>
              </button>
              <button type="button" onClick={() => deletarSede(copa.id)} ><FaTrash size={20} style={{ color: 'red' }} /></button>
            </Item>
          ))
        }
      </Lista>
    </Container>
  )
}

export default Dashboard
