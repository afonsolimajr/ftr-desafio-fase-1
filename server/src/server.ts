// ESM
import Fastify from 'fastify'

const server = Fastify({
  logger: false
})

const port = 3333

server.get('/', async (request, reply) => {
  return { hello: 'world' }
})

const start = async () => {
  try {
    await server.listen({ port }).then(() => {
      console.log(`Servidor rodando na porta ${port}`)
    })
  } catch (err) {
    server.log.error(err)
  }
}
start()