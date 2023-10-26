const db = require('../database')
const { treatmentDate } = require('../helpers')

class EventController {

  static async newEvent(req, res) {
    const { name, date } = req.body;
    const regexDate =  /[0-9]{2}\/[0-9]{2}\/[0-9]{4} [0-9]{2}:[0-9]{2}/
    
    try {
      if (!regexDate.test(date)) return res.status(406).send('Data no formato inválido! Formato correto: xx/xx/xxxx xx:xx')
      const formatedDate = treatmentDate(date)

      if(formatedDate < new Date().toISOString()) return res.status(404).send('A data do evento não pode ser criada no passado.')
      await db.query(`INSERT INTO event (name, date) VALUES($1,$2)`,[name, formatedDate])

      res.status(201).json({message: 'Evento criado com sucesso!'})
    } catch (err) {
      res.send(err)
    }
  }

  static async allActiveEvents(req,res) {
    try {
      const allActive = await db.query(`SELECT * FROM event WHERE date > now()`)
      
      res.status(200).json(allActive.rows)
    } catch (err) {
      res.status(500).send('Erro no servidor: ', err)
    }
  }

  static async deleteEvent(req, res) {
  res.send('Faz nada por hora')
  }
}

module.exports = EventController; 