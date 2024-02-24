import { PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

const getChampion = (req, res) => {
    prisma.champions.findMany()
    .then ((champions) => {
        res.json(champions)
    })
    .catch((error) => res.json(error))

}

const getChampions = (req, res) => {
    let id = Number(req.params.id)
    prisma.champions.findUnique({
        where: {
            id: id
        }
    })
    .then(champions => {
        res.json(champions)
    })
    .catch(error => {
        res.json(error)
    })
}

const createChampions = (req, res) => {
    let champions = req.body
    prisma.champions.create({
        data: {
            name: champions.name, 
        }
    })
    .then(champions => {
        res.json(champions)
    })
    .catch (error => {
        res.json(error)
    })
}

const updateChampions = (req, res) => {
    let id = Number(req.params.id)
    let champions = req.body
    prisma.champions.update({
        where: {
            id: id
        },
        data: {
            name: champions.name
        }
    })
    .then(champions => {
        res.json(champions)
    })  
    .catch(error => {
        res.json(error)
    })

}

const deleteChampions = (req, res) => { 
    let id = Number(req.params.id)
    prisma.champions.delete({
        where: {
            id: id
        }
    })
    .then(champions => {
        res.json(champions)
    })
    .catch(error => {
        res.json(error)
    })
}

export { getChampion, getChampions, createChampions, updateChampions, deleteChampions }